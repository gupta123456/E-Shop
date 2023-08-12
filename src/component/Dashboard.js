import React, { useState } from "react";
import ColorToggleButton from "./toggle/toggleFilter.js";
import MediaCard from "./cards/ImgCard.js";
import {cardData} from "../data/CardData.js";
import BasicSelect from "./dropdown/Dropdown.js";
import "../assets/index.css";
import PrimarySearchAppBar from "./navbar/Navbar.js";

function Dashoard() {

  const [data, setData] = useState(cardData);

  function updateData(data){
    console.log("Updated Data :: ");
    console.log(data);
    setData(data);
  }

  return (
    <div style={{margin: 0}}>
      <PrimarySearchAppBar/>
      <div style={{marginTop:"1em", textAlign: "center"}}>
        <ColorToggleButton data={cardData} updateData={updateData} />
      </div>
      <div style={{ marginLeft: "2em", width: "10em"}}>
        <BasicSelect data={cardData} updateData={updateData} />
      </div>
      
      <div style={{ margin: "2em", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2em"}}>
        {data.map((card, key) => {
          return (
            <div>
              <MediaCard
                key = {card.id}
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
