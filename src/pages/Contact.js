import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import emailjs from 'emailjs-com';
import fake from '../fake.json';

function Contact(){
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if( !formdata.from_name ){
      setError(true);
      setMessage('Name is required');
    } else if( !formdata.reply_to ){
      setError(true);
      setMessage('Email is required');
    } else if( !formdata.subject ){
      setError(true);
      setMessage('Subject is required');
    } else if( !formdata.message ){
      setError(true);
      setMessage('Message is required');
    } else{
      setError(false);
      
      emailjs.sendForm(fake['serviceId'], fake['templateId'], event.target, fake['userId'])
      .then((result) => {
          setMessage('Your message has been sent');
      }, (error) => {
        setMessage('Error verified: please send an email directly to edoardomanieri@gmail.com');
      });

    }
  }
  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }
  const numberFormatter = (number) =>{
    const phnNumber = number;
    return phnNumber;
  }

  const handleAlerts = () => {
    if(error && message){
      return (
        <div className="alert alert-danger mt-4">
          {message}
        </div>
      )
    } else if(!error && message){
      return (
        <div className="alert alert-success mt-4">
          {message}
        </div>
      )
    } else{
      return null;
    }
  }

  useEffect(() => {
    axios.get('/api/contactinfo')
      .then(response =>{
        setPhoneNumbers(response.data.phoneNumbers);
        setEmailAddress(response.data.emailAddress);
        setAddress(response.data.address);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me"/>
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>Get In Touch</h4>
                <form className="mi-form mi-contact-form" onSubmit={submitHandler}>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">Enter your name*</label>
                    <input onChange={handleChange} type="text" name="from_name" id="contact-form-name" value={formdata.from_name}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">Enter your email*</label>
                    <input onChange={handleChange} type="text" name="reply_to" id="contact-form-email" value={formdata.reply_to}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">Enter your subject*</label>
                    <input onChange={handleChange} type="text" name="subject" id="contact-form-subject" value={formdata.subject}/>
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">Enter your Message*</label>
                    <textarea onChange={handleChange} name="message" id="contact-form-message" cols="30" rows="6" value={formdata.message}></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit" >Send Mail</button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Email</h6>
                      {emailAddress.map(email => (
                        <p key={email}><a href={`mailto:${email}`}>{email}</a></p>
                      ))}
                    </div>
                  </div>
                )}
                {!address ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin/>
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>Address</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
