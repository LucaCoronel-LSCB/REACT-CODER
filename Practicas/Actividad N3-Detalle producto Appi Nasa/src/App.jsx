import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import PictureCard from "./components/PictureCard/PictureCard";
import axios from "axios";
import Spinner from "./components/Spinner/spinner";
function App() {
  const [data, setData] = useState({});
  const [isLouding, setIsLouding] = useState(true);
  console.log("data :", data);

  //useEffect(() => {
  //fetch(
  //"https://api.nasa.gov/planetary/apod?api_key=dkKIoyqaXdm6Aqw8gerDdv4ZWzmvOJrFK3qaMwWY"
  //)
  //.then((resp) => resp.json())
  //.then((info) => setData(info));
  //}, []);
  useEffect(() => {
    setIsLouding(true);
    axios(
      `https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_API_KEY}`
    ).then((res) => setData(res.data));
    setTimeout(() => {
      setIsLouding(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="App">
        <Header title="Nasa App" />
        {isLouding ? <Spinner /> : <PictureCard data={data} />}
        <Header title="fotter" />
      </div>
    </>
  );
}

export default App;
