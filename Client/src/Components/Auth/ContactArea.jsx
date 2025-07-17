import React from "react";
import {ButtonSubmit,Input} from '../index'

const ContactArea = () => {

  return (
    <main className="items-baseline sm:grid gap-20 grid-cols-2"  >
    <ContactAreaText/>
    <section className=" pt-10 sm:pt-0">
       <form className="flex sm:font-black font-light flex-col  gap-6" >
        <div className="flex flex-col gap-4" >
        <Input placeholder="Your Email" />
        <Input placeholder="Topic" />
        </div>
        <textarea className=" p-4 text-para-md flex flex-col h-50 outline-0 border-2 border-gray-400 rounded-md " name="textarea" placeholder="Ask your query?" ></textarea>
        <div>
        <ButtonSubmit  btnText="Talk to us" />
        </div>
       </form>
    </section>
    </main>
  );
};

import { NavLink } from "react-router-dom";

const ContactAreaText = () => {
    const article = {
        para: "We're always happy to discuss a new project or collaboration.",
      };
  return (
    <main>
     <section>
       <p className="pb-6 text-text-primary sm:font-black font-light text-heading-sm sm:text-heading-lg ">{article.para}</p>
      <article className="grid gap-4 sm:font-black font-light text-text-primary text-para-sm sm:text-para-emd" >
        <div>
          <p >Say hi👋</p>
          <span className="underline underline-offset-4" >niteshcse3333@gmail.com</span>
        </div>
        <div>
          <p>Have a Project?</p>
          <span className="underline underline-offset-4" >niteshcse3333@gmail.com</span>
        </div>
        <div>
          <p className="underlin" >Work With us!</p>
          <NavLink><span className="underline underline-offset-4 " >Careers</span></NavLink>
        </div>
      </article>
        </section>
    </main>
  );
};

export default ContactArea;
