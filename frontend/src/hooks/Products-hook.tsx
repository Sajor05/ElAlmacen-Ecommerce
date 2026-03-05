import axios from "axios";
import { useEffect, useState } from "react";
import type { IProduct } from "../../../shared/interface";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<IProduct[]>(
          "http://localhost:4000/api/products",
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return products;
}
