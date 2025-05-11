import { useContext, useEffect, useRef, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";

const ChatWithUs = () => {
  const { backendUrl, chatMessages, setChatMessages } = useContext(ShopContext);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [chatMessages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setChatMessages((prev) => [...prev, userMsg]);
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

      setChatMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  const exportChat = () => {
    const text = chatMessages
      .map(
        (msg) => `${msg.sender === "user" ? "You" : "Z-Wood Bot"}: ${msg.text}`
      )
      .join("\n");

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "zwood-chat-history.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearChat = () => {
    setChatMessages([]);
  };

  return (
    <div className="pt-8 border-t">
      <div className="text-2xl text-center">
        <Title text1={"CHAT"} text2={"WITH US"} />
      </div>

      <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded shadow mt-8">
        <div
          className="h-[400px] overflow-y-auto border p-4 rounded mb-2"
          ref={messagesEndRef}
        >
          {chatMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-[75%] text-sm ${
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
            <div className="text-left text-gray-400 text-sm animate-pulse">
              <div className="bg-gray-100 p-2 px-3 rounded-lg inline-block max-w-[75%]">
                Typing...
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Ask about wood furniture..."
            className="flex-1 border rounded px-3 py-2 text-sm outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 text-sm"
          >
            Send
          </button>
        </div>

        <div className="text-right mt-2">
          <button
            onClick={exportChat}
            className="text-sm text-teal-700 underline hover:text-teal-900 mr-4"
          >
            Export chat history
          </button>
          <button
            onClick={clearChat}
            className="text-sm text-red-500 underline hover:text-red-700"
          >
            Clear chat history
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;
