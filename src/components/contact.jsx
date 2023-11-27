import { useState } from "react";
// import emailjs from "@emailjs/browser";
import * as emailjs from "emailjs-com";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import React from "react";

import { contactConfig } from "../data/contact_config";

export const Contact = (props) => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: formData.message,
    };

    emailjs
    .send(
      contactConfig.YOUR_SERVICE_ID,
      contactConfig.YOUR_TEMPLATE_ID,
      templateParams,
      contactConfig.YOUR_USER_ID
    )
    .then(
      (result) => {
        console.log(result.text);
        setFormdata({
          loading: false,
          alertmessage: "SUCCESS! ,Thankyou for your messege",
          variant: "success",
          show: true,
        });
      },
      (error) => {
        console.log(error.text);
        setFormdata({
          alertmessage: `Faild to send!,${error.text}`,
          variant: "danger",
          show: true,
        });
        document.getElementsByClassName("co_alert")[0].scrollIntoView();
      }
    );

 
};

const handleChange = (e) => {
  setFormdata({
    ...formData,
    [e.target.name]: e.target.value,
  });
};


  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name || ""}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email || ""}

                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button className="btn btn-custom btn-lg" type="submit">
                    {formData.loading ? "Sending..." : "Send Message"}
                  </button>
                {/* <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button > */}
                <br />
              {/* <Row>
                <Col lg="12" className="form-group">
                  
                </Col>
              </Row> */}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Sozo tech Inc. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              sozoh Tech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
