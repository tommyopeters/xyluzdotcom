import React from "react";

const Arrows = () => {
  return (
    <div className="navigation">
      <div className="icon-wrapper">
        <div className="move-up">
          <img
            src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156908/staybusy/chevron-up_qhbtio.svg"
            alt=""
          />
        </div>
      </div>
      <div className="icon-wrapper">
        <div className="move-down">
          <img
            src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156814/staybusy/chevron-down_ofllk5.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Arrows;
