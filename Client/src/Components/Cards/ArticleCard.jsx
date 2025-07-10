import React from "react";
import { CardButton } from "../index";

const ArticleCard = ({ heading, CardTitle, para1, para2,btnText }) => {
  return (
    <section>
      <article>
        <p  className="text-title-sm md:text-title-md font-black text-text-secondary" >{CardTitle}</p>
        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-0 sm:gap-14" >
          <li className=" font-primary flex flex-col pt-2 pb-2" >
            <h1 className="text-heading-sm sm:text-heading-md leading-8 md:leading-18 font-extrabold text-text-primary " >{heading}</h1>
          </li>
            
          <div>
          <li className="grid gap-2 text-text-primary text-para-sm md:text-para-md pb-4 font-secondary" >
            <p>{para1}</p>
            <p>{para2}</p>
          </li>
            <CardButton text={btnText} />
          </div>
        </ul>
      </article>
    </section>
  );
};

export default ArticleCard;
