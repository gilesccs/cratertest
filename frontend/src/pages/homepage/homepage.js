import React from 'react';

// Header/Footer imports
import Header from '../../components/shared/header';
import Search from '../../components/shared/search';
import NavBar from '../../components/shared/navbar';
import Footer from '../../components/shared/footer';

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