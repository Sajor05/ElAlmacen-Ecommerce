import axios from "axios";

const isProduction = import.meta.env.MODE === "production";
const baseURL = isProduction
  ? "https://mercadolibre-sajor05.onrender.com/api"
  : "http://localhost:4000/api";
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
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
