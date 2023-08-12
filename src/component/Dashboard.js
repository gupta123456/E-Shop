import React from "react";
import ColorToggleButton from "./toggle/toggleFilter.js";
import MediaCard from "./cards/ImgCard.js";
import {cardData} from "../data/CardData.js";
import BasicSelect from "./dropdown/Dropdown.js";
import "../assets/index.css";
import PrimarySearchAppBar from "./navbar/Navbar.js";

const cards = cardData;

function Dashoard() {
  return (
    <div style={{margin: 0}}>
      <PrimarySearchAppBar/>
      <div style={{marginTop:"1em", textAlign: "center"}}>
        <ColorToggleButton />
      </div>
      
      <div style={{ marginLeft: "2em", width: "10em"}}>
        <BasicSelect />
      </div>
      
      <div style={{ margin: "2em", display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "2em"}}>
        {cards.map((card, key) => {
          return (
            <div>
          <MediaCard
            key={key} 
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
