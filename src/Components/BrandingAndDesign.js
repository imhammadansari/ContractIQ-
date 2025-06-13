import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BrandingAndDesign = () => {
  return (
    <>
    <div className='flex flex-col px-4 lg:px-10 py-4' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div */}
        <h1 className='font-bold text-2xl text-gray-600 text-center pb-4'>Branding & Design</h1>
        <div className='flex flex-col lg:flex-row gap-4 justify-center'> {/*Child Div */}
            <div className='flex flex-col px-4 py-2 items-center lg:w-1/4' style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}>
            <LazyLoadImage className='w-10 lg:w-16 pt-2' src='/pen-tool.png' effect='blur' loading='lazy' />
            <h1 className='pt-2 font-bold'>Logo Design</h1>
            <p className='text-xs lg:text-sm '>A sleek, modern logo that combines elements of blockchain and intelligence, such as a shield (representing security) 
                combined with a brain or circuit motif (representing AI and intellect)</p>
            </div>
            
            <div className='flex flex-col px-4 py-4 items-center lg:w-1/4' style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}>
            <LazyLoadImage className='w-10 lg:w-16' src='/palette.png' effect='blur' loading='lazy' />
            <h1 className='pt-2 font-bold'>Color Palette</h1>
            <p className='text-xs lg:text-sm '>Use colors like deep blue (trust, security), white (simplicity, clarity), and green (growth, optimization) to reflect 
                the project's focus on security and knowledge.</p>
            </div>
            
            <div className='flex flex-col py-4 px-4 items-center lg:w-1/4' style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}>
            <LazyLoadImage className='w-10 lg:w-16' src='/microphone.png' effect='blur' loading='lazy' />
            <h1 className='pt-2 font-bold'>Tone of Voice</h1>
            <p className='text-xs lg:text-sm '> Professional, educational, and forward-thinking. Clear, concise communication aimed at simplifying complex smart contract
                 concepts for all levels of users.</p>
            </div>
            
        </div> {/*Child Div */}
    </div> {/*Parent Div */}
    </>
  )
}

export default BrandingAndDesign