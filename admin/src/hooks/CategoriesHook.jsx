import axios from "axios";
import { useState, useEffect } from "react";

const isProduction = import.meta.env.MODE === "production";
const baseURL = isProduction
  ? "https://elalmacen-ecommerce.onrender.com/api"
  : "http://localhost:4000/api";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + "/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}

export function useParentCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + "/parent-categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}

export function useChildrenCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(baseURL + "/children-categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}
