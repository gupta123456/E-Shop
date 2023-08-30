import React, { useState, useEffect } from "react";
import ColorToggleButton from "./toggle/toggleFilter.js";
import MediaCard from "./cards/ImgCard.js";
import BasicSelect from "./dropdown/Dropdown.js";
import PrimarySearchAppBar from "./navbar/Navbar.js";
import axios from 'axios';
import "../assets/index.css";

function Dashoard() {

  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);


  function updateData(data) {
     console.log("Updated Data :: ");
     console.log(data);
     setData(data);
  }

  function updateSearch(val){
    const newData = originalData.filter((item) =>
      item.name.toLowerCase().includes(val.toLowerCase())
    );
    setData(newData);
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {
    getCategories();
  }, [])

  function getUsers() {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user')
    const SIGNIN_URL = "http://localhost:8080/api/users";
    const config = {
      headers: { 'x-auth-token':token }
    };
    try {
      return axios.get(SIGNIN_URL, config).then((response) => {
        let data = response.data;
        for (var i = 0; i < data.length; i++) {
          if (data[i].email === user) {
            sessionStorage.setItem('role', data[i].roles[0].name);
            sessionStorage.setItem('userId',data[0].id)
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
      headers: { "x-auth-token":token }
    };
    try {
      return axios.get(SIGNIN_URL, config).then((response) => {
        console.log(response.data);
        setOriginalData(response.data);
        setData(response.data);
      })
    } catch (err) {
      console.log(err.response);
    }
  }

  function getCategories(){
    const token = sessionStorage.getItem('token');
    axios.get("http://localhost:8080/api/products/categories", {
          headers: {
            'x-auth-token':token,
          },
        })
        .then(function (response) {
          console.log(response.data)
          setCategoryList(response.data);
        })
        .catch(function (err) {
          console.log(err)
        });
  }

  return (
    <div style={{ margin: 0 }}>
      <PrimarySearchAppBar updateSearch={updateSearch}/>
      <div style={{ marginTop: "1em", textAlign: "center" }}>
        <ColorToggleButton data={categoryList} updateData={updateData} />
      </div>
      <div style={{ marginLeft: "2em", width: "10em" }}>
        <BasicSelect data={originalData} updateData={updateData} />
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
                price={card.price}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashoard;
