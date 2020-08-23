import React from 'react';

// Header/Footer imports
import Header from './../../components/header/header';
import Search from './../../components/header/Search';
import NavBar from './../../components/header/navbar';
import Footer from './../../components/header/Footer';

// Homepage specific imports
import Hero from './../../components/homepage/hero';
import Banner from './../../components/homepage/banner';
import BannerLeft from './../../components/homepage/bannerLeft';
import Deal from './../../components/homepage/deal';
import Benefits from './../../components/homepage/benefits';

function Homepage() {
    return (
      <div >
        <Header></Header>
        <Search></Search>
        <NavBar></NavBar>
        <Hero></Hero>
        <Banner></Banner>
        <BannerLeft></BannerLeft>
        <Deal></Deal>
        <Benefits></Benefits>
        <Footer></Footer>
      </div>
    );
  }
  
  export default Homepage;