/** @format */

import React from 'react';
import { Header } from '../components/header';
import HeroPage from '@/components/pages/heroPage';
import Footer from '@/components/pages/footerPage';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroPage />
      <div className="container flex-1 mx-auto py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutPage;
