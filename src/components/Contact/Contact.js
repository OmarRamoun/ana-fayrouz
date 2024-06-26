import React, { Component } from 'react';

import ContactForm from '../Form/form';

import './Contact.style.css';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="contact-page-area section-padding go-contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="contact-page-item contact-inner-container" style={{ maxWidth: '450px' }}>
                <h2>My Contacts</h2>
                <p>
                  Ready to take your project to the next level? If you're looking for a skilled and dedicated software engineer to help bring your project to life, I would love to hear from you.
                </p>
                <div className="email">
                  <h3>Email</h3>
                  <span>contact@omarramoun.com</span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="contact-area contact-area-2 contact-area-3">
                <h2>Quick Contact Form</h2>
                <div className="contact-form">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='row'>
            <div className='col col-xs-12'>
              <div className='contact-map'>
                <iframe
                  title='map'
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57763.58882182253!2d55.38442113562169!3d25.195692423227655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z4Kam4KeB4Kas4Ka-4KaHIC0g4Kam4KeB4Kas4Ka-4KaHIOCmhuCmruCmv-CmsOCmvuCmpCAtIOCmuOCmguCmr-CngeCmleCnjeCmpCDgpobgprDgpqwg4KaG4Kau4Ka_4Kaw4Ka-4Kak!5e0!3m2!1sbn!2sbd!4v1540725271741'
                />
              </div>
            </div>
          </div> */}
        </div>
        <div className="white_svg svg_white">
          <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5">
            <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 " />
          </svg>
        </div>
      </div>
    );
  }
}

export default Contact;
