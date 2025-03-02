"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { StarsIcon } from "lucide-react";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
        <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-7 blue-gradient-title'>
          Tech that tracks
          <br /> every penny!
        </h1>
        <p className='text-xl text-gray-500 mb-8 max-w-2xl mx-auto my-1 font-bold '>
          An AI-driven financial management platform that helps you track,
          analyze, and optimize your spending with real-time insights
        </p>

        <div className='flex justify-center space-x-4'>
          <Link href='/dashboard'>
            <Button size='lg'>Get Started</Button>
          </Link>
          <Link href='https://github.com/saisathwik22/finance-platform'>
            <Button size='lg' variant='outline' className='font-semibold'>
              <StarsIcon />
              Github
            </Button>
          </Link>
        </div>
        <div className='hero-image-wrapper'>
          <div ref={imageRef} className='hero-image'>
            <Image
              src='/banner.jpeg'
              width={1280}
              height={720}
              alt='dashboard preview'
              className='rounded-lg shadow-2xl border mx-auto'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
