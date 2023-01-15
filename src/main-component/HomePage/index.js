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
// import html2canvas from 'html2canvas';
// import Image from '../../Assets/, useEffectImages/home/img-2.jpg', useEffect

const HomePage = () => {


  // useEffect(() => {
  //   html2canvas(document.querySelector("#root")).then(canvas => {
  //     const image = canvas.toDataURL("image/png");
  //     window.open(image);
  //   });
  // }, []);

  // TODO: https://stackoverflow.com/questions/13918441/javascript-addeventlistener-without-selecting-children
  // TODO: https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
  // TODO: https://favicon.io/favicon-converter/
  // TDOD: https://favicon.io/favicon-converter/
  // TODO: https://webdesign.tutsplus.com/tutorials/how-to-create-a-frosted-glass-effect-in-css--cms-32535

  return (
    <Fragment>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Testimonial />
      {/* <PricingPlan /> */}
      {/* <Blog /> */}
      <Contact />
      {/* <Footer /> */}
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
