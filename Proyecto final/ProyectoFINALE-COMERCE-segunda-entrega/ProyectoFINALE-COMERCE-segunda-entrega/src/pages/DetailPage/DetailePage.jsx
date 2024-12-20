import axios from "axios";
import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./DetailePage.css"
//componentes
import CardUser from "../../components/CardUser/CardUser";

const DetailePage = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setData(json.data)
    );
  }, [id]);


  return (
  <div className="cajaDetailePage">
    {data.id ? <CardUser data={data}/> : null }
  </div>
  )
};

export default DetailePage;
