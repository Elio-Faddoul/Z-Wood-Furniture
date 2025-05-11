import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "./ShopContext"; // Import context from separate file
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // The function to calculate cart count based on cartItems
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          totalCount += cartItems[items][item];
        }
      }
    }
    return totalCount; // Return the calculated count
  };

  // The function to add items to the cart and update cartItems state
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Type");
      return;
    }

    // Update frontend state
    setCartItems((prevCart) => {
      const cartData = structuredClone(prevCart);

      if (cartData[itemId]) {
        if (cartData[itemId][size]) {
          cartData[itemId][size] += 1;
        } else {
          cartData[itemId][size] = 1;
        }
      } else {
        cartData[itemId] = { [size]: 1 };
      }

      return cartData;
    });

    // Sync with backend
    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error("Error syncing with backend: " + error.message);
      }
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;
    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error("Error syncing with backend: " + error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemInfo = products.find(
        (product) => product.id.toString() === itemId
      );
      if (!itemInfo) continue; // Skip if product not found

      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          totalAmount += itemInfo.price * cartItems[itemId][size]; // Use itemInfo.price
        }
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        //console.log(response.data);
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  });

  // Memoize the context value to optimize performance
  const value = useMemo(
    //here all of the the items here are added to acces those finctions in any other componenets
    () => ({
      products,
      currency,
      delivery_fee,
      search,
      setSearch,
      showSearch,
      setShowSearch,
      cartItems,
      addToCart,
      setCartItems,
      getCartCount,
      updateQuantity,
      getCartAmount,
      navigate,
      backendUrl,
      setToken,
      token,
      chatMessages,
      setChatMessages,
    }),
    [
      search,
      showSearch,
      setSearch,
      setShowSearch,
      cartItems,
      products,
      token,
      chatMessages,
    ] // Dependencies for re-memoization
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
