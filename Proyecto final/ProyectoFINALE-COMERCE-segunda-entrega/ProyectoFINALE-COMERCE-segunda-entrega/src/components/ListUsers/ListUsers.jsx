import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ListUsers.css";
import { Link } from "react-router-dom";
/*componentes*/
import CardUser from "../CardUser/CardUser";

const ListUsers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setData(res.data.results)
    );
  }, []);

  return (
      <div className="CardList">
        {data.map((data) => {
          return (
            <div key={data.id}>
                <Link to={`/detail/${data.id}`}>
                    <CardUser data={data} />
                </Link>
            </div>
          );
        })}
      </div>
  );
};

export default ListUsers;
