import React from "react";

const Socials = () => {
  return (
    <div className="social-links">
      {window.location.pathname !== "/contact" ? (
        <a
          href="http://twitter.com/xyluz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
      ) : null}
      {window.location.pathname !== "/contact" ? (
        <a href="mailto:seyi@hng.tech">
          <i className="fas fa-envelope"></i>
        </a>
      ) : null}
    </div>
  );
};

export default Socials;
