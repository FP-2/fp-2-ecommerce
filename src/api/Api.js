import axios from "axios";

export async function productsData() {
  const products = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return products;
}

export const auth = async ({ username, password }) => {
  return axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password
  });}