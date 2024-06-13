import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ countries }) => {
  return (
    <div>
      {countries.map((elem) => {
        return (
          <div>
            <h4>{elem.name.common}</h4>
            <NavLink to={`/${elem.name.common}`}>

              <img src={elem.flags.png} />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
