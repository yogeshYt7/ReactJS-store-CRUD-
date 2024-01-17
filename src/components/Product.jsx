import React, { useState } from 'react';
import axiosInstance from"../helper/axiosInstance"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import "./Global.css";
const Product = () => {

  let navigate = useNavigate(); 
  let [pname, setpname] = useState("");
  let [pprice, setpprice] = useState("");
  let [pqty, setpqty] = useState("");

  let addproduct = (e) => {
    e.preventDefault();
    let payload = {
      pname,
      pprice,
      pqty
    }
    axiosInstance.post("/posts", payload);
   toast.success(`${pname}added successfully!!!!!!!!!!!!!!!!!!!!!!`)
    navigate("/")
    
  }

  return (
    <div className='formblock'>
      <form action="" style={{ textAlign: "center" }}>
        <fieldset>
          <legend>ADD PRODUCT</legend>
          <br /> <br />
          <label htmlFor="pname">Product Name:</label>
          <input type="text" value={pname} onChange={(e) => setpname(e.target.value)} />
          <br /><br />
          <label htmlFor="">ProductQty</label>
          <input type="text" value={pqty} onChange={(e) => setpqty(e.target.value)} />
          <br /><br />
          <label htmlFor="price">Price: </label>
          <input id='price' type="number"  onChange={(e) => setpprice(e.target.value)} />
          <br /> <br />
          <button onClick={addproduct}>ADD CART</button>
          <br /> <br />
        </fieldset>
      </form>
    </div>
  );
}

export default Product;
