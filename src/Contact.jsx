import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0tix1em",
        "template_s9y9xro",
        e.target,
        "user_ZcHzAeJd0PpNXjdJQ7Fa2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="Contact" className="Contact">
      <h1 className="contactHead">
        Contact <span className="highlight">Me</span>
      </h1>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail} className="form">
          <label className="fieldName">Name</label>
          <br />
          <input
            required
            width="100"
            height="50"
            className="fieldInput"
            type="text"
            name="from_name"
            placeholder="Enter Your Name."
          />
          <br />
          <br />
          <label className="fieldName">Email</label>
          <br />
          <input
            required
            className="fieldInput"
            type="email"
            name="from_email"
            placeholder="Enter Your Mail Id."
          />
          <br />
          <br />
          <label className="fieldName">Message</label>
          <br />
          <textarea
            required
            rows="8"
            className="fieldInput"
            name="message"
            placeholder="Please Type Your Message."
          />
          <br />
          <br />
          <input className="mailBtn" type="submit" value="Send"></input>
        </form>
      </div>
    </div>
  );
}

export default Contact;
