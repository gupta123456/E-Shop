import React from "react";
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import SignUp from './component/SignUp';
import Details from './component/Details';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceOrder from "./component/PlaceOrder/placeOrder";
import AddProduct from "./component/AddProduct/addProduct";
import ModifyProduct from './component/ModifyProduct/modifyProduct';


const App = () => {
  return (
    <BrowserRouter>    
       <Routes>
       <Route exact path='/' element={<Login/>} />
       <Route exact path='/signup' element={<SignUp />} />
       <Route exact path='/dashboard' element={<Dashboard/>}/>
       <Route exact path='/placeOrder' element ={<PlaceOrder/>}/>
       <Route exact path="/productDetails" element={<Details />}/>
       <Route exact path="/addProduct" element={<AddProduct />}/>
       <Route exact path="/modifyProduct" element={<ModifyProduct />}/>
     </Routes>
    </BrowserRouter>
  );
};

export default App;
