import axios from "axios";

const BASE_URL = "https://nexviewback.vercel.app";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
