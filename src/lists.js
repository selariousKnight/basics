import React from "react";
import './list.css'
function ListOfPeople({ data }) {
let {name,id,value} = data
  return (
    <>
      <div className="originalDiv">
        <h2>{id}</h2>
        <h2>{name}</h2>
        <h2>{value}</h2>
      </div>
    </>
  );
}

export default ListOfPeople;