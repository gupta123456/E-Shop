import React, { useState, useEffect } from "react";
import ColorToggleButton from "./toggle/toggleFilter.js";
import MediaCard from "./cards/ImgCard.js";
import { cardData } from "../data/CardData.js";
import BasicSelect from "./dropdown/Dropdown.js";
import "../assets/index.css";
import PrimarySearchAppBar from "./navbar/Navbar.js";
import axios from 'axios';

function Dashoard() {

  const [data, setData] = useState([]);

  function updateData(data) {
     console.log("Updated Data :: ");
     console.log(data);
     setData(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    getProducts();
  }, [])

  function getUsers() {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user')
    const SIGNIN_URL = "http://localhost:8080/api/users";
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      return axios.get(SIGNIN_URL, config).then((response) => {
        let data = response.data;
        for (var i = 0; i < data.length; i++) {
          if (data[i].email === user) {
            sessionStorage.setItem('role', data[i].roles[0].name);
          }
        }
      })
    } catch (err) {
      console.log(err.response);
    }
  }

  function getProducts() {
    const token = sessionStorage.getItem('token');
    const SIGNIN_URL = "http://localhost:8080/api/products";
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      return axios.get(SIGNIN_URL, config).then((response) => {
        console.log(response.data);
        setData(response.data);
      })
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <div style={{ margin: 0 }}>
      <PrimarySearchAppBar/>
      <div style={{ marginTop: "1em", textAlign: "center" }}>
        <ColorToggleButton data={cardData} updateData={updateData} />
      </div>
      <div style={{ marginLeft: "2em", width: "10em" }}>
        <BasicSelect data={cardData} updateData={updateData} />
      </div>

      <div style={{ margin: "2em", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2em" }}>
        {data.map((card,i) => {
          return (
            <div>
              <MediaCard
                key={i}
                id={card.id}
                heading={card.name}
                imageUrl={card.imageUrl}
                description={card.description}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashoard;
