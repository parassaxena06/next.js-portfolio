import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Contact from '@/sections/Contact';
import Loader from "@/components/Loader";
import React, { useState } from "react";
import Head from "next/head";

function index () {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
  <div className='app'>
    <Head>
      <title>Paras Saxena</title>
      <link rel='shortcut icon' href='/favicon.ico' />
    </Head>
    { showContent && (
      <>
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
      <Hero />
      <About />
      <Contact />
      </main>
      </>
    )}
    <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
  </div>
);
}

export default index;
