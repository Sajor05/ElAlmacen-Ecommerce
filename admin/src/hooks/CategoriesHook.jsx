import axios from "axios";
import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://elalmacen-ecommerce.onrender.com/api/categories",
        );
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
        const res = await axios.get(
          "https://elalmacen-ecommerce.onrender.com/api/parent-categories",
        );
        console.log(res);
        console.log(res.data);
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
        const res = await axios.get(
          "https://elalmacen-ecommerce.onrender.com/api/children-categories",
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}
