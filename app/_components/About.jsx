import React from 'react';

import aboutImage from "@/public/Image/banerImage.png"
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';


const About = () => {
    return (
        <div className="hero min-h-screen" >

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 md:p-4 '>
                    <p className='font-semibold text-[20px] text-[#FF6DA0]'>What we are?</p>
                    <h1 className="text-5xl font-bold">Unlock Your <span className='text-[#FF6DA0]'>Potential</span> with Expert-Led Courses </h1>
                    <p className="py-6">
                        Discover a world of knowledge at your fingertips. Our online courses are designed
                        to help you achieve your goals, whether you're building a career,
                        mastering a skill, or exploring a passion. Learn at your own pace, from anywhere
                    </p>
                    <ul className='ml-6'>
                        <span className='flex my-2'><CircleCheck  className='pr-2 text-[#FF6DA0]'/><li>Expert-Led Courses</li></span>
                        <span className='flex my-2'><CircleCheck  className='pr-2 text-[#FF6DA0]'/><li>Flexible Learning</li></span>
                        <span className='flex my-2'><CircleCheck  className='pr-2 text-[#FF6DA0]'/><li>Explore a wide range of subjects and skills.</li></span>
                        <span className='flex my-2'><CircleCheck  className='pr-2 text-[#FF6DA0]'/><li>Earn certificates to showcase your achievements.</li></span>
                        <span className='flex my-2'><CircleCheck  className='pr-2 text-[#FF6DA0]'/><li>Commitment to excillance.</li></span>
                    
                    </ul>
                    <button className="btn btn-primary mt-4">Learn More</button>
                </div>
                <div className='w-1/2'>
                    <Image src={aboutImage} alt='hero image'></Image>
                </div>

            </div>
        </div>
    );
};

export default About;