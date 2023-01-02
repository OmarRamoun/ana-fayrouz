import React, {Fragment, useState, useEffect} from 'react';
import Banner from '../../components/Banner';
import About from '../../components/About/About';
import Service from '../../components/Service';
import PricingPlan from '../../components/PricingPlan';
import Blog from '../../components/Blog';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Testimonial from '../../components/Testimonial';
import Portfolio from '../../components/Portfolio/Portfolio';
import Scrollbar from '../../components/scroolbar';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import html2canvas from 'html2canvas';
import ProjectModalContent from "../../components/Modal/ProjectModalContent";
import Image from '../../Assets/Images/home/img-2.jpg'

const modalItems = {
  title: 'Rene',
  details: 'Best project on the web, just for soso my love',
  technologies: ['html', 'css', 'js'],
  preview: {title: 'rene.com', link: 'https://google.com'},
  source: {title: 'github', link: 'https://github.com/rene'},
  client: 'IO Compnay',
  image: Image,
}

const HomePage = () => {

  const [showModal, setShowModal] = useState(true);

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
      {/* <PricingPlan /> */}
      {/* <Blog /> */}
      <Contact />
      {/* <Footer /> */}
      <Scrollbar />
      <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
        <ProjectModalContent projectInfo={modalItems}/>
      </Modal>
    </Fragment>
  );
};
export default HomePage;
