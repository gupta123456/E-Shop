import React from "react";
import PrimarySearchAppBar from "./component/navbar/Navbar.js";
import ColorToggleButton from "./component/toggle/toggleFilter.js";
import MediaCard from "./component/cards/ImgCard.js";
import {cardData} from "./data/CardData.js";
import BasicSelect from "./component/dropdown/Dropdown.js";
import "./assets/index.css";

const cards = cardData;

function App() {
  return (
    <div style={{margin: 0}}>
      <PrimarySearchAppBar />
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

export default App;
