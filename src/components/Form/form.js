import React, { useRef, useState } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import Snackbar from '@mui/material/Snackbar';

import emailjs from '@emailjs/browser';

import './form.style.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ ...initialState });

  const form = useRef();

  const {
    firstName, lastName, email, subject, message,
  } = formState;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    error[name] = '';

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setOpen(true);

    Object.keys(formState).forEach((key) => {
      if (formState[key] === '') {
        setSuccess(false);
        error[key] = `Please enter your ${key}`;
      }
    });

    if (
      error.firstName === ''
      && error.lastName === ''
      && error.email === ''
      && error.subject === ''
      && error.message === ''
    ) {
      sendEmail(e);
    } else {
      setError({ ...error });
      setLoading(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xofolwt', 'template_aohnq1v', form.current, 'oSTadiDMxfihxDo1m').then(
      (result) => {
        setLoading(false);
        setSuccess(true);
        setFormState(initialState);
      },
      (error) => {
        setLoading(false);
        setSuccess(false);
      },
    );
  };

  return (
    <form ref={form} onSubmit={submitHandler} className="form">
      <div className="row form-container">
        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              value={firstName}
              onChange={changeHandler}
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <p>{error.firstName ?? ''}</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              value={lastName}
              onChange={changeHandler}
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <p>{error.lastName ?? ''}</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
            />
            <p>{error.email ?? ''}</p>
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={subject}
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <p>{error.subject ?? ''}</p>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              value={message}
              onChange={changeHandler}
              name="message"
              placeholder="Message"
            />
            <p>{error.message ?? ''}</p>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-submit">
            <button
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              type="submit"
              className="template-btn-s3"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress color="neutral" variant="plain" size="sm" />
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <div>
          {success ? (
            <div className="alert success">Your Message Was Sent Successfully</div>
          ) : (
            <div className="alert error">
              {error.email === ''
              && error.firstName === ''
              && error.lastName === ''
              && error.subject === ''
              && error.message === ''
                ? 'Something Went Wrong, Please Try Submitting Again'
                : 'Please Fill All The Fields'}
            </div>
          )}
        </div>
      </Snackbar>
    </form>
  );
};
export default ContactForm;
