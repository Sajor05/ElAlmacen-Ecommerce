import axios from "axios";

const isProduction = import.meta.env.MODE === "production";
const baseURL = isProduction
  ? "https://elalmacen-ecommerce.onrender.com/api"
  : "http://localhost:4000/api";
const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

/*=========
== G E T ==
=========*/

export const verifyTokenRequest = () => instance.post(`/verifyAdminToken`);

/*===========
== P O S T ==
===========*/

export const updateCategories = (category) =>
  instance.post("/createCategory", category);

export const updateProducts = (product) => instance.post("/products", product);

/*================================
== S E S I O N  R E Q U E S T´S ==
================================*/
export const loginRequest = (user) => instance.post(`/loginAdmin`, user);
export const logoutRequest = (user) => instance.post(`/logout`, user);
