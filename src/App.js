import React from "react";
// import Login from "./components/SignIn/login";
// import SignUp from './components/SignUp/signup';
// import PlaceOrder from './components/PlaceOrder/placeOrder';
import Dashboard from './component/Dashboard';
// import AddAddress from "./components/Address/Add_Address";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import  Header  from "./components/Header/header";


const App = () => {
  return (
    <>
    <BrowserRouter>    
    {/* <Header/> */}
       <Routes>
       {/* <Route exact path='/login' element ={<Login />} />
       <Route exact path='/signup' element ={<SignUp />} />
       <Route exact path='/placeOrder' element ={<PlaceOrder />} /> */}
       <Route exact path='/' element ={<Dashboard/>}/>
       {/* <Route exact path='/addAddress' element ={<AddAddress />} /> */}
       {/* <Route exact path='/placeorder' element ={<PlaceOrder />} /> 
       <Route exact path='/product' element ={<ProductCard />} /> */}
       {/* <Route exact path='/' element ={<Home />} /> */}
       {/* <Route exact path='/modifyproduct' element ={<ModifyProduct />} />
       <Route exact path='/addproduct' element ={<AddProduct />} /> */}
     </Routes>
     </BrowserRouter>
    </>
  );
};

export default App;
