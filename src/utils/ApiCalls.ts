import axios from "axios";

// const url = "https://fakestoreapi.com";

const url = "https://bookstore-z52r.onrender.com/server";

//get data
export const getAllproducts = async () => {
  return await axios
    .get(`${url}/getall`)
    .then((res) => res.data)
    .catch((err) => err);
};

//post data
export const postAllproducts = async ({ title }: any) => {
  return await axios
    .post(`${url}/newBook`, { title: title })
    .then((res) => res.data)
    .catch((err) => err);
};

export const getOneBook = async (id: any) => {
  return await axios
    .get(`${url}/getone/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};
