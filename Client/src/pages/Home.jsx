import React, { Children, useState } from "react";
import { Hero,WeDo,Specialties,WeDoIt,OurWork } from "../Components/index";

const Home = () => {

  return (
   <main  >
    <Hero/>
    <WeDo/>
    <Specialties/>
    <WeDoIt/>
    <OurWork/>
   </main>
  );
};

export default Home;
