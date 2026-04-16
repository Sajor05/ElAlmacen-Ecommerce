import axios from "axios";
import { useState, useEffect } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const isProduction = import.meta.env.MODE === "production";
  const baseURL = isProduction
    ? "https://elalmacen-ecommerce.onrender.com/api"
    : "http://localhost:4000/api";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + "/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return products;
}
