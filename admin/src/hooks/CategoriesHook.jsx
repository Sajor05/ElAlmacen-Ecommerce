import axios from "axios";
import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/categories");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return categories;
}
