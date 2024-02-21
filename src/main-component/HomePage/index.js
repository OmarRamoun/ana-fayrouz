import React, { Fragment } from 'react';
import Service from '../../components/Service/Service';
import Contact from '../../components/Contact/Contact';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar';
import { Navbar, Banner, About } from '@components';
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
  </>
);
export default HomePage;
