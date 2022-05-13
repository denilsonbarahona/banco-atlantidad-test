import React, { useState, useRef } from "react";
import Form from "../containers/form";
import Button from "../components/button";
import WeatherList from "../containers/weather-list";
import RequestData from "../API/request";
import getCurrentPosition from "../utils/getCurrentPosition";
import "../styles/main.css";

const Main = () => {
  const formRef = useRef();
  const [state, setState] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorDescription, setErrorDescription] = useState("");
  const [Place, setPlace] = useState("");

  const transformData = (data) => {
    const { next_days, failed, error, region } = data;
    if (!failed) {
      setState(next_days);
      setPlace(region)
    } else {
      setErrorDescription(error);
      setShowError(true);
    }
    setLoading(false)
  };

  const SearchByType = async () => { 
    setLoading(true)
    const formData = new FormData(formRef.current);
    const search = formData.get("searchBy");
    const response = await RequestData(search);
    transformData(response);
  };

  const searchByDefault = async () => {
    setLoading(true)
    const {latitude, longitude} = await getCurrentPosition();
    const response = await RequestData(`${latitude},${longitude}`);
    transformData(response);
  };

  return (
    <main className="main">
      <Form ref={formRef}>
        <input type="text" name="searchBy" />
        <div>
          <Button onClick={searchByDefault}>Usar mi Ubicación</Button>
          <Button onClick={SearchByType}>Buscar</Button>
        </div>
      </Form>
      <p>Region: {Place}</p>
      {isLoading && <span>Loading</span>}
      {!isLoading && state.length > 0 && <WeatherList data={state} />}
      {!isLoading && showError && <p>{errorDescription}</p>}
    </main>
  );
};

export default Main;
