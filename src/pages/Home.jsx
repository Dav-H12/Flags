import React from "react";
import CauntryCart from "../Components/Header/CountryCart/CauntryCart";
import './pages.css';

const Home = ({ countries }) => {
  return (
    <div>
      <div className="home-block">
      {countries.map((elem) => {
        return (
          <CauntryCart key ={elem.name.common} elem ={elem}/>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
