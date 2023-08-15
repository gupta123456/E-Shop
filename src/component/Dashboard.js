import React, { useState } from "react";
import ColorToggleButton from "./toggle/toggleFilter.js";
import MediaCard from "./cards/ImgCard.js";
import { cardData } from "../data/CardData.js";
import BasicSelect from "./dropdown/Dropdown.js";
import "../assets/index.css";
import PrimarySearchAppBar from "./navbar/Navbar.js";
import axios from 'axios';

function Dashoard() {

  const [data, setData] = useState(cardData);
  const [] = useState(getUsers);

  function updateData(data) {
    console.log("Updated Data :: ");
    console.log(data);
    setData(data);
  }

  async function getUsers() {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user')
    const SIGNIN_URL = "http://localhost:8080/api/users";
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      var response = await axios.get(SIGNIN_URL, config);
      let data = response.data;
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === user) {
          console.log(data[i].id)
          sessionStorage.setItem('id', data[i].id)
        }
      }
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <div style={{ margin: 0 }}>
      <PrimarySearchAppBar />
      <div style={{ marginTop: "1em", textAlign: "center" }}>
        <ColorToggleButton data={cardData} updateData={updateData} />
      </div>
      <div style={{ marginLeft: "2em", width: "10em" }}>
        <BasicSelect data={cardData} updateData={updateData} />
      </div>

      <div style={{ margin: "2em", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2em" }}>
        {data.map((card) => {
          return (
            <div>
              <MediaCard
                key={card.id}
                heading={card.heading}
                body={card.body}
                footer={card.footer}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashoard;
