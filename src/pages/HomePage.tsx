import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Features from '../components/home/Features';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
    </Layout>
  );
};

export default HomePage;