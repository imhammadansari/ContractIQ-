import React from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WhatWeDo = () => {
  return (
    <>
    <div className='px-6 lg:px-20 py-4 flex flex-col' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div*/}
        <h1 className='text-center text-2xl pb-2 font-bold text-gray-600'>What We Do</h1>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-20 justify-center items-center'> {/*Child Div*/}
        <div className='flex items-center justify-center'> {/*Image Section*/}
            <LazyLoadImage className='lg:w-[23rem]' src='/what-we-do-01.jpg' effect='blur' loading='lazy' />
        </div> {/*Image Section*/}
        <div className='lg:w-1/2 text-gray-600 text-start'> {/*Content Div*/}
        <p className='text-xs md:text-sm lg:text-lg'>
        We provide a comprehensive suite of services designed to transform the way smart contracts are developed and managed:
        </p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Smart Contract Auditing: </span>Identify and fix vulnerabilities to ensure maximum security.</p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Optimization: </span>Improve gas efficiency and code performance for cost-effective transactions.</p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Educational Insights: </span>Help developers learn and grow through real-time recommendations, 
        tutorials, and personalized learning paths.</p>
        </div> {/*Content Div*/}

        </div> {/*Child Div*/}
    </div> {/*Parent Div*/}
    </>
  )
}

export default WhatWeDo