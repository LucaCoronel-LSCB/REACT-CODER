import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage"
//componentes
import CardUser from "../../components/CardUser/CardUser";

const CategoryPage = () => {
  const [datas, setDatas] = useState([]);
  let { categoryId } = useParams();
  //console.log(datas);
  //console.log(categoryId);

  let filteredCharacters = datas.filter((data)=> {
    return data.species === categoryId
  });

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setDatas(res.data.results)
    );
  }, []);

  return (
    <div className="cajaDetailePage">
      {filteredCharacters.map((data) => {
        return(
          <div key={data.id}>
            <CardUser data={data}/>
          </div>
        )
      })}
    </div>
  );
};

export default CategoryPage;
