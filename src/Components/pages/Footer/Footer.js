import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../../App.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { init } from "emailjs-com";
init("user_Oi0lKtYK3i025ldanfhB6");

function Footer() {
  const [send, setSend] = useState(true);

  function sendEmail(e) {
    e.preventDefault();
    setSend(false);

    emailjs
      .sendForm(
        "service_81jg93z",
        "template_6po9u0a",
        e.target,
        "user_Oi0lKtYK3i025ldanfhB6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div id="footer" className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Coaching is unlocking a person's potential to maximize their growth.
        </p>
        <p className="footer-subscription-text">
          Geef kort aan waar ik jou mee kan helpen. Je ontvangt binnen 24 uur
          persoonlijk bericht en een uitgebreid intake formulier.
        </p>
        <div className="input-areas">
          {send ? (
            <form className="contact-form" onSubmit={sendEmail}>
              <textarea
                className="footer-input"
                rows="5"
                name="message"
                type="text"
                placeholder="Wat kan ik voor je doen?"
              />
              <input
                className="footer-input"
                name="name"
                type="text"
                placeholder="Volledige Naam"
              />
              <input
                className="footer-input"
                name="phone"
                type="number"
                placeholder="telefoonnummer"
              />
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Email"
              />
              <Button buttonStyle="btn--outline">Verzend</Button>
            </form>
          ) : (
            <h1>verzonden</h1>
          )}
        </div>
      </section>
      <div className="footer-links">
        {/* <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">Hoe het werkt</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div>
        </div> */}
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Info</h2>
            <Link to="/">benjamin.claudio@gmail.com</Link>
            <Link to="/">06-81900313</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              BetterBody Coaching
            </Link>
          </div>
          <small className="website-rights">BetterBody Coaching © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/claudjuh/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
