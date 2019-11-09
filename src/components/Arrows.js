import React from "react";

const Arrows = ( { showArrow } ) => {
  console.log(showArrow)
  return (
    <div
      style={{ gridTemplateRows: showArrow === "/contact" ? "1fr" : "1fr 1fr" }}
      className="navigation"
    >
      <div className="icon-wrapper">
        <div
          style={{ display: showArrow === "/" ? "none" : "block" }}
          className="move-up"
        >
          <img
            className="arrow-img"
            src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156908/staybusy/chevron-up_qhbtio.svg"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ display: showArrow === "/contact" ? "none" : "block" }}
        className="icon-wrapper"
      >
        <div className="move-down">
          <img
            className="arrow-img"
            src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156814/staybusy/chevron-down_ofllk5.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Arrows;
