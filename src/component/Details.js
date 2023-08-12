import React from "react";
import PrimarySearchAppBar from "./navbar/Navbar.js";
import ProductDetails from "./detail/ProductDetails.js";
import ColorToggleButton from "./toggle/toggleFilter.js";
import "../assets/index.css";

/*
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
*/

export default function Details(){
  return (
    <div style={{margin: 0}}>
      <PrimarySearchAppBar />
    <div style={{textAlign: "center", marginTop: "2%"}}>
        <ColorToggleButton />
    </div>
      <div style={{ margin: "auto", width: "50%", marginTop: "7%"}}>
        <ProductDetails />
      </div>
    </div>
  );
}