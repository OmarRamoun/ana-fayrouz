import React, { Fragment } from 'react';
import Service from '../../components/Service/Service';
import Contact from '../../components/Contact/Contact';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar';
import { Navbar, Banner, About } from '@components';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = ({lenisState}) => (
  <>
    <Navbar />
    <Banner />
    <About />
    <Service />
    <Portfolio lenisState={lenisState} />
    <Testimonial />
    <Contact />
  </>
);
export default HomePage;
