import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID jnXW35arTEwfuQcNMtcxwYrWn_qj32QXmLrh7u2U9ho",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
