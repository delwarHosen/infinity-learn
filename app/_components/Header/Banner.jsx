"use client"

import Image from 'next/image';
import React from 'react';
import './Banner.module.css'
// import bgImage from './Banner.module.css'
import heroImg from "@/public/Image/banerImage.png"
import bgImg from "@/public/Image/bg.png"
import { ArrowRight } from 'lucide-react';

const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Image
                src={bgImg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <Image src={heroImg} alt='hero image'></Image>
                </div>
                <div className='w-1/2 md:p-14'>
                    <p className='font-semibold text-[20px] text-[#FF6DA0]'>Feed your knowledge</p>
                    <h1 className="text-5xl font-bold">Develop your Skills with online <span className='text-[#FF6DA0]'>Courses</span> </h1>
                    <p className="py-6">
                        Unlock your potential with our comprehensive online course, designed to equip
                        you with practical knowledge and skills. Whether you're
                        a beginner or looking to enhance your expertise, this course offer
                    </p>
                    <button className="btn btn-primary">Contact us<ArrowRight></ArrowRight> </button>
                </div>
            </div>
        </div>

    );
};

export default Banner;