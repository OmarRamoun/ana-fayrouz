import React, {Fragment, useEffect} from 'react';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Service from '../../components/Service';
import PricingPlan from '../../components/PricingPlan';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio';
import Scrollbar from '../../components/scroolbar';
import Navbar from '../../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';

const HomePage = () => {

  // useEffect(() => {
  //   html2canvas(document.querySelector("#root")).then(canvas => {
  //     const image = canvas.toDataURL("image/png");
  //     window.open(image);
  //   });
  // }, []);

  return (
    <Fragment>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      <PricingPlan />
      <Blog />
      <Contact />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
