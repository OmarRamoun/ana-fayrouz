import React, {Fragment} from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import Service from '../../components/Service/Service';
// import PricingPlan from '../../components/PricingPlan';
// import Blog from '../../components/Blog';
import Contact from '../../components/Contact/Contact';
// import Footer from '../../components/Footer';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
 
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
