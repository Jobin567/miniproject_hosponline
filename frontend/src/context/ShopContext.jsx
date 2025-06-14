import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [reports, setReports] = useState([]);
  const [slots] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const addToCart = async (itemId, size = null) => {
  let cartData = structuredClone(cartItems);

  if (size) {
    if (!cartData[itemId]) cartData[itemId] = {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
  } else {
    cartData[itemId] = (cartData[itemId] || 0) + 1;
  }

  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
};

const getCartCount = () => {
  let totalCount = 0;
  for (const itemId in cartItems) {
    const item = cartItems[itemId];
    if (typeof item === 'object') {
      // Size-based cart item
      for (const size in item) {
        totalCount += item[size];
      }
    } else {
      // Simple item
      totalCount += item;
    }
  }
  return totalCount;
};

const updateQuantity = async (itemId, size, quantity) => {
  let cartData = structuredClone(cartItems);

  if (size) {
    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
    }
  } else {
    cartData[itemId] = quantity;
  }

  setCartItems(cartData);

  if (token) {
    try {
      await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
};

const getCartAmount = () => {
  let totalAmount = 0;
  for (const itemId in cartItems) {
    const itemInfo = products.find((product) => product._id === itemId);
    if (!itemInfo) continue;

    const item = cartItems[itemId];
    if (typeof item === 'object') {
      // Size-based
      for (const size in item) {
        totalAmount += itemInfo.price * item[size];
      }
    } else {
      // Simple product
      totalAmount += itemInfo.price * item;
    }
  }
  return totalAmount;
};


  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setProducts(response.data.products.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getDoctorsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/doctor/list');
      if (response.data.success) {
        setDoctors(response.data.doctors.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getReportsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/report/list');
      if (response.data.success) {
        setReports(response.data.reports.reverse());
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
      const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserDetails = async (token) => {
    try {
      const response = await axios.post(backendUrl + '/api/user/details', {}, { headers: { token } });
      if (response.data.success) {
        setUser(response.data.user);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (!token && localToken) {
      setToken(localToken);
      getUserCart(localToken);
      getUserDetails(localToken);
    }
    if (token) {
      getUserCart(token);
      getUserDetails(token);
    }
  }, [token]);

  useEffect(() => {
    getProductsData();
    getDoctorsData();
  }, []);

  useEffect(() => {
    if (user) {
      getReportsData(); // ✅ fetch reports only after user is available
    }
  }, [user]);

  const value = {
    products, doctors, reports, slots, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, setCartItems,
    getCartCount, updateQuantity,
    getCartAmount, navigate, backendUrl,
    setToken, token, user
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
