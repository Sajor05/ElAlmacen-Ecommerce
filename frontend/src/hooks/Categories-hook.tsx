import axios from "axios";
import { useState, useEffect } from "react";
import type { ICategory } from "../../../shared/interface";

export async function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<ICategory[]>(
          "http:localhost:4000/api/categories",
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
