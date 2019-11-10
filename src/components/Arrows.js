import React from "react";
import { NavLink } from "react-router-dom";

const Arrows = () => {
  let locationArray = {
    "/": 0,
    "/education": 1,
    "/work": 2,
    "/interests": 3,
    "/contact": 4
  };
  console.log(locationArray[window.location.pathname]);
  return (
    <div className="navigation">
      <div className="arrow-img">
        <div className="move-up">
          <NavLink
            to={
              locationArray[window.location.pathname] === 1
                ? "/"
                : locationArray[window.location.pathname] === 2
                ? "/education"
                : locationArray[window.location.pathname] === 3
                ? "/work"
                : "/interests"
            }
          >
            {window.location.pathname === "/" ? null : (
              <img
                src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156908/staybusy/chevron-up_qhbtio.svg"
                alt=""
              />
            )}
          </NavLink>
        </div>
      </div>
      <div className="arrow-img">
        <NavLink
          to={
            locationArray[window.location.pathname] === 3
              ? "/contact"
              : locationArray[window.location.pathname] === 2
              ? "/interests"
              : locationArray[window.location.pathname] === 1
              ? "/work"
              : "/education"
          }
        >
          <div className="move-down">
            {window.location.pathname === "/contact" ? null : (
              <img
                src="https://res.cloudinary.com/tommyopeters/image/upload/v1573156814/staybusy/chevron-down_ofllk5.svg"
                alt=""
              />
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Arrows;
