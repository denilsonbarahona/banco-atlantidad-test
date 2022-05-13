const BASE_API = "https://weatherdbi.herokuapp.com/data/weather/";

const RequestData = (search) => {
  return fetch(`${BASE_API}${search}`)
    .then((response) => {
      if (!response.ok) throw new Error("Error fetching data from weather API");
      return response.json();
    })
    .then((data) => {
      return { ...data, failed: false };
    })
    .catch((error) => {
      return { failed: true, error: error.message };
    });
};

export default RequestData;
