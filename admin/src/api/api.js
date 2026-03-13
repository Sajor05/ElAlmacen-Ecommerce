import axios from "axios";

const isProduction = import.meta.env.MODE === "production";
const baseURL = "https://elalmacen-ecommerce.onrender.com/api";
const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

/*---------
-- G E T --
---------*/

export const verifyTokenRequest = () => instance.post(`/verifyAdminToken`);

/*-----------
-- P O S T --
-----------*/

export const updateCategories = (category) =>
  instance.post("/createCategory", category);
export const loginRequest = (user) => instance.post(`/loginAdmin`, user);
