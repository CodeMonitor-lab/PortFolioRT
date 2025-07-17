import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import test from '../../assets/team.jpg';
import AdminDashboard from '/AdminDashboard.png'
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  Pagination,
  Parallax,
  Autoplay,
  EffectFade,
} from 'swiper/modules';

const ProjectHero = () => {
  const swiperRef = useRef(null);

  const ProjectImage = [
    {
      img: test,
      title: 'Role Based Access Controle',
      description:
        'Creating a Role-Based User Authentication and Authorization using MongoDB, Express, React, and Node.js.',
    },
    {
      img: AdminDashboard,
      title: 'Project 2',
      description:
        'Building Full Stack User Authentication and Authorization using MongoDB, Express.js, Node.js, and React.js.',
    },
    {
      img: test,
      title: 'Project 3',
      description:
        'Building responsive and fully functional MERN Blogging Website with a CRUD Admin Panel.',
    },
    {
      img: '', // no image fallback
      title: 'Project 4',
      description:
        'Building MERN Blogging Website with a CRUD Admin Panel.',
    },
  ];

  return (
    <main>
      <section>
        <article>
          <Swiper
            modules={[Pagination, Parallax, Autoplay, EffectFade]}
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            parallax={true}
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
          >
            {ProjectImage.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-[400px] bg-cover flex items-center justify-center transition-all duration-500"
                  style={{
                    backgroundImage: item.img
                      ? `url(${item.img})`
                      : 'linear-gradient(to right, #f87171, #facc15)',
                  }}
                >
                  <ul className="bg-black/30 p-6 rounded text-white  mx-auto text-center">
                    <li>
                      <span
                        data-swiper-parallax="-200"
                        className="block text-2xl sm:text-3xl font-bold mb-3"
                      >
                        {item.title}
                      </span>
                      <p
                        data-swiper-parallax="-100"
                        className="text-base sm:text-lg"
                      >
                        {item.description}
                      </p>
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </section>
    </main>
  );
};

export default ProjectHero;
