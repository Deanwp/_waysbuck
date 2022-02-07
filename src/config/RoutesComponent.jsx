import React from 'react';
import {AdminPage, Home, Profile, AddProduct, AddTopping, DetailProduct, Cart} from '../pages'
import '../style/style.css'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from '../component/Header';

const RoutesComponenet = () => {
    
    return(
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/addproduct" element={<AddProduct />} />
                <Route exact path="/detailproduct" element={<DetailProduct />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/addtopping" element={<AddTopping />} />
                <Route exact path="/profile" element={<Profile />} /> 
                <Route exact path="/adminpage" element={<AdminPage />} /> 
            </Routes>
        </Router>
    )
}

export default RoutesComponenet