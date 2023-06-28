import axios from "axios";

// const url = "https://fakestoreapi.com";

const url = "https://bookstore-z52r.onrender.com/server";

//get data
export const getAllproducts = async () => {
  return axios
    .get(`${url}/getall`)
    .then((res) => res.data)
    .catch((err) => err);
};

//post data
export const postAllproducts = async ({ title }: any) => {
  await axios
    .post(`${url}/newBook`, { title: title })
    .then((res) => res.data)
    .catch((err) => err);
};
