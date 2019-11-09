import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach me anywhere:</p>
      {/* <ul style={{ listStyle: "none", textAlign: "left", margin: "0 auto" }}>
        <li>
          <i className="fab fa-twitter"></i> {"  "} @xyluz
        </li>
        <li>
          <i className="fas fa-envelope"></i> {"  "} seyi@hng.tech
        </li>
        <li>
          <i className="fas fa-envelope"></i> {"  "} seyi@staybusy.ng
        </li>
      </ul> */}
      <div className="contact-links">
        <div style={{ marginRight: "11%" }}>
          <a
            href="http://twitter.com/xyluz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>{" "}
          {"  "} @xyluz
        </div>
        <div style={{ marginRight: "3.5%" }}>
          <a href="mailto:seyi@hng.tech">
            <i className="fas fa-envelope"></i>
          </a>{" "}
          {"  "} seyi@hng.tech
        </div>
        <div>
          <a href="mailto:seyi@staybusy.ng">
            <i className="fas fa-envelope"></i>
          </a>{" "}
          {"  "} seyi@staybusy.ng
        </div>
      </div>
    </section>
  );
};

export default Contact;
