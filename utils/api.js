import axios from "axios";

const searchPlacesApi = async (questionOne, questionTwo, questionThree) => {
  const result = await axios.get("/api/search_places");
  return result.data;
};

export default searchPlacesApi;
