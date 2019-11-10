import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach me anywhere:</p>
      <ul>
        <li>
          <a
            href="http://twitter.com/xyluz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> @xyluz
          </a>
        </li>
        <li>
          <a href="mailto:seyi@hng.tech">
            <i className="fas fa-envelope"></i> seyi@hng.tech
          </a>
        </li>
        <li>
          <a href="mailto:seyi@staybusy.ng">
            <i className="fas fa-envelope"></i> seyi@staybusy.ng
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
