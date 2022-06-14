import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../config/axios";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [customer, setCustomer] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get("/customer/");
          setCustomer(res.data.customer);
        }
      } catch (err) {
        removeAccessToken();
        navigate("/login");
      }
    };
    fetchMe();
  }, []);
  const signUp = async (input) => {
    const res = await axios.post("/auth/signup", input);
    setAccessToken(res.data.token);
    const resMe = await axios.get("/customer/");
    setCustomer(resMe.data.customer);
  };
  const login = async (email, password) => {
    console.log(email, password);
    const res = await axios.post("/auth/login", { email, password });
    setAccessToken(res.data.token);
    const resMe = await axios.get("/customer/");
    setCustomer(resMe.data.customer);
    if (resMe.data.customer.role === "customer") {
      navigate("/");
    } else {
      navigate("/addProduct");
    }

    return resMe.data.customer;
  };
  const logout = async () => {
    removeAccessToken();
    navigate("/");
    setCustomer(null);
  };
  return (
    <AuthContext.Provider value={{ customer, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};
export default AuthContextProvider;

export { useAuth, AuthContext };
