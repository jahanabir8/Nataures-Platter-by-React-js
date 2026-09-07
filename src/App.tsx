import React from "react";
import NavBar from "./Component/Nav/NavBar";
import Hero from "./Component/Hero/Hero";
import Services from "./Component/Services/Services";
import Popular from "./Component/Popular/Popular";
import Arrival from "./Component/Arrival/Arrival";
const App = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <Hero></Hero>
      <Services></Services>
      <Popular></Popular>
      <Arrival></Arrival>
    </div>
  );
};

export default App;
