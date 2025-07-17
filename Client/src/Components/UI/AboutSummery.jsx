import React from 'react';
import resp from '/responsive.svg';

const AboutSummery = () => {
  const summaries = [
    {
      heading:"I am a skilled full-stack developer with experience in front-end and back-end technologies. I specialize in developing end-to-end applications that provide an optimal user experience.",
      img:resp,

    },
    {
      heading:"With a passion for full-stack development, I am a proficient developer capable of designing and developing complex applications with expertise in React and Node.js.",
      img:resp,

    },
    {
      heading:"I am a highly analytical full-stack developer committed to delivering robust and reliable applications across various industries. With expertise in Java and Python, I develop efficient and secure systems that provide an optimal user experience.",
      img:resp,

    },
    {
      heading:"As an innovative full-stack developer, I deeply understand best practices and have experience in Angular and Ruby on Rails. I deliver high-quality products that meet client needs.",
      img:resp,

    },
    {
      heading:"I am a collaborative and creative full-stack developer, experienced in PHP and MySQL. I develop scalable and efficient applications that meet or exceed client expectations.",
      img:resp,

    }
  ];

  return (
    <section className="px-6 py-10">
      <ol className="grid-cols-2 justify-center items-center  gap-10 text-xl md:text-2xl">
        {summaries.map((item, index) => (
          <li key={index} className="flex flex-col md:flex-row gap-6 items-center">
            <span className="max-w-3xl">{item.heading}</span>
             <img className="w-24 md:w-100" src={item.img} alt="Responsive" />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default AboutSummery;
