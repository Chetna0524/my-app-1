import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import { MdFoodBank } from 'react-icons/md';
import Pages from './pages/pages';
import Category from './components/category';
import Search from './components/search';


/*const API_KEY = "c3a81b3f4f72405985b3b955464700d3";*/

function App() { 
  return (
    <>      
    	<div className="container">
        <BrowserRouter>    
          <Link to="/" className="logo">
            <MdFoodBank />
          </Link>
          <Search />
          <Category />	   
        	<Pages />
        </BrowserRouter>
    	</div>
      
      
    </>   
  );
}

export default App;
