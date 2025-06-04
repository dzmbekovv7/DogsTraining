import React from 'react';
import Hero from './Hero';
import RecommendedBooks from './RecommendedBooks';
import Categories from './Categories';
import Testimonials from './Testimonials';
import Dogs from './Dogs';
import DogTrainingBenefits from './AboutSection'
import QuoteSection from './QuoteSection';
import DogTrainingFAQ from './FAQ';
import Features from './Features';
import CallToAction from './CallToAction';
const Home = () => (
  <div>
    <Hero />
    <Dogs />
    <Categories />
    <DogTrainingBenefits/>
    <Testimonials />
    <DogTrainingFAQ/>
    <CallToAction/>
    <Features/>
  </div>
);

export default Home;
