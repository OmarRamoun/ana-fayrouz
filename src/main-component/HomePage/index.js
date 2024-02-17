import React, { Fragment } from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Service from '../../components/Service/Service';
import Contact from '../../components/Contact/Contact';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => (
  <>
    <Navbar />
    <Banner />
    <About />
    <Service />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Scrollbar />
  </>
);
export default HomePage;
