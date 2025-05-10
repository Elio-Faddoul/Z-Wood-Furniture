import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const FloatingChat = () => {
  const { backendUrl } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("zwood-chat");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("zwood-chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(`${backendUrl}/api/chat`, {
        message: input,
      });

      const botMsg = {
        sender: "bot",
        text: response.data.reply || "Sorry, I couldn't understand that.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Try again later." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition"
          aria-label="Open chat"
        >
          💬
        </button>
      )}

      {/* Chat box */}
      {open && (
        <div className="w-[300px] h-[400px] bg-white shadow-lg border rounded-lg flex flex-col">
          <div className="p-3 border-b font-semibold flex justify-between items-center">
            Z-Wood Assistant
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 animate-pulse">Typing...</div>
            )}
            <div ref={bottomRef}></div>
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Ask about wood furniture..."
              className="flex-1 border rounded px-2 py-1 text-sm outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-teal-600 text-white px-3 rounded hover:bg-teal-700 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChat;
