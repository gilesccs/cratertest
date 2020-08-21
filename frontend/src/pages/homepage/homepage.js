import React from 'react';
import Header from './../../components/header/header';
import Search from './../../components/header/Search';
import NavBar from './../../components/header/navbar';

function Homepage() {
    return (
      <div >
        <Header></Header>
        <Search></Search>
        <NavBar></NavBar>
      </div>
    );
  }
  
  export default Homepage;