import React from 'react';
import Hero from './Home/Hero';
import Services from './Home/Services';
import Trusted from './Home/Trusted';

const About = () => {
  const data = {
    name: 'Nabeel Ecommerce',
    para: 'Welcome to our online store! We offer a wide selection of products to meet your needs. We are committed to providing you with the best possible service. We are always looking for ways to improve our service and welcome your feedback. Please contact us if you have any questions or comments.',
  };
  return (
    <>
      <Hero myData={data} />
      ;
      <Services />
      <Trusted />
    </>
  );
};

export default About;
