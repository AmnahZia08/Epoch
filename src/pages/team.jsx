import React from 'react'
import PageHeader from '../components/common/pageHeader'
import TeamComponent from '../components/teamComponent'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'
import img_1 from '../assets/img/about-image-1.jpg';
import img_2 from '../assets/img/about-image-2.jpg';
import img_3 from '../assets/img/about-image-3.jpg';
import img_4 from '../assets/img/about-image-4.jpg';
import img_5 from '../assets/img/about-image-5.jpg';

const teamData = [
  {
    id: 1,
    img: img_1,
    name: 'Christian Haol',
    position: 'Web Developer',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 2,
    img: img_2,
    name: 'Christian Haol',
    position: 'Web Developer',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 3,
    img: img_3,
    name: 'Christian Haol',
    position: 'Web Developer',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 4,
    img: img_4,
    name: 'Christian Haol',
    position: 'Web Developer',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 5,
    img: img_5,
    name: 'Christian Haol',
    position: 'Web Developer',
    social_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
];

const Team = () => {
  return (
    <>
      <PageHeader title={'Team'} />
      <TeamComponent data={teamData} />
      <Brands />
      <InstagramGallery />
      <ScrollRestoration />
    </>
  );
};

export default Team