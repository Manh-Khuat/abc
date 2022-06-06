import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Data } from "../data/Data";

const Product = () => {
  const [search, setSearch] = useState("")
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    console.log(search)
  }
  const cardItem = (item) => {
    return (
      <div className="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <Link to={`/products/${item.id}`} className="btn btn-outline-primary">
            Buy now
          </Link>
        </div>
      </div>
    );
  };

  let a = Data.filter(dat => {
    return dat.title.includes(search)
  })
  
  return (
    <div>
       
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
      <form style={{marginLeft: '34px'}}  className="col-12 col-lg-auto mt-1 mb-3 mb-lg-0 me-lg-3">
          <input onChange={handleSearchChange} type="search" className="form-control" placeholder="Search..." aria-label="Search" style={{ width: '290px'}} />
        </form>
        <div className="row justify-content-around">
          {
          (a.length < Data.length) ? 
              (a.map(cardItem)) : (Data.map(cardItem))
            
          }
          </div>
      </div>
    </div>
  );
};

export default Product;
