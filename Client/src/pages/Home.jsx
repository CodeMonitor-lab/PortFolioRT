import React, { Children, useState } from "react";
import { Hero,ArticleCard,WeDo,Specialties,WeDoIt,OurWork } from "../Components/index";
import test from '../Components/test.json'

const Home = () => {

  return (
   <main>
      <Hero/>
    <section className="flex flex-col gap-10 px-5 sm:px-20 py-10 sm:py-10 md:px-8 lg:px-30 " >
      {/* <WeDo/> */}
      <ArticleCard btnText='Our Brands' CardTitle={test.wedoit.title} heading={test.wedoit.heading} para1={test.wedoit.para1} para2={test.wedoit.para2} />
      <Specialties/>
      {/* <WeDoIt/> */}
      <ArticleCard btnText='Our Design' CardTitle={test.article_1.title} heading={test.article_1.heading} para1={test.article_1.para1} para2={test.article_1.para2}/>
      {/* <OurWork/> */}
    </section>
   </main>
  );
};

export default Home;
