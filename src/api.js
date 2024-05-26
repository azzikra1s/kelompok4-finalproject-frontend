import axios from "axios";

export const getProvinces = async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/getProvinces");
    return response.data[0].results;
  } catch (err) {
    return err.response.data;
  }
};
export const getCities = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/getCities/${id}`);
    return response.data[0].results;
  } catch (err) {
    return err.response.data;
  }
};
export const getPostalCode = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/api/getPostalCode/${id}`);
    return response.data[0].results.postal_code;
  } catch (err) {
    return err.response.data;
  }
};
