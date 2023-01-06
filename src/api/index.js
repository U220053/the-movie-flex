import axios from "./axios";

const API_KEY = "b978128d0ad4f5eeaf223929834c3298";

export const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
export const fetchDetails = async (id) => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
