import React from 'react'
import { Link } from 'react-router-dom'
import {LazzyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Footer = () => {
    return (
        <>
            <div className='w-full border-t border-black border-opacity-30 px-8 lg:px-20 py-4' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}>
                <div className='hidden lg:flex lg:flex-row gap-4 justify-between'>

                    <div className='flex flex-col lg:w-[20rem]'>
                    <Link to='/'><LazzyLoadImage className="w-20 lg:w-24" src='/logo1.png' effect='blur' loading='lazy' /></Link>
                        
                    </div>

                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>ContractIQ </h1>

                        <div className='flex lg:flex-col text-xs lg:text-base text-gray-600 text-start gap-4 lg:gap-0'>
                        <a href="#introduction">Introduction</a>
        <a href="#features">Features</a>
        <a href="#technology">Our Technology</a>
        <a href="#revenue">Revenue Models</a>
        <a href="#marketing">Marketing Strategy</a>
                        </div>

                    </div>


                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start lg:pb-2'>ContractIQ </h1>

                    <div className='flex lg:flex-col text-xs lg:text-base text-gray-600 text-start gap-4 lg:gap-0'>
                        <p>Home</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        </div>

                    </div>


                

<div className='flex flex-col items-start'>

    <h1 className='font-bold text-sm md:text-base lg:text-base text-gray-600 text-start lg:pb-2'>Social Media</h1>

    <div className='flex lg:flex-col text-xs text-start gap-16 text-gray-600 lg:gap-0 lg:text-base'>
    <p>FB</p>
    <p>Insta</p>
    <p>Twitter</p>
    <p>Youtube</p>
    </div>
</div>


</div>

<div className='lg:hidden flex flex-col gap-4'>

                    <div className='flex justify-between'>
                    <div className='flex flex-col justify-center lg:w-[20rem]'>
                    <Link to='/'><LazzyLoadImage className="w-20 lg:w-24" src='/logo1.png' effect='blur' loading='lazy'/></Link>
                        
                    </div>

                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>ContractIQ </h1>

                        <div className='flex flex-col text-xs lg:text-base text-gray-600 text-start gap-1'>
                        <p>Intoduction</p>
                        <p>Features</p>
                        <p>Our Techlogy</p>
                        <p>Revenue Models</p>
                        <p>Marketing Strategy</p>
                        </div>

                    </div>

                    </div>

                    <div className='flex justify-between'>
                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1'>ContractIQ </h1>

                    <div className='flex flex-col text-xs lg:text-base text-gray-600 text-start gap-1'>
                        <Link to='/'>Home</Link>
                        <Link to='/about-us'>About Us</Link>
                        <Link to='/contact-us'>Contact Us</Link>
                        </div>

                    </div>

                    <div className='flex flex-col items-start'>

<h1 className='font-bold text-sm md:text-base text-gray-600 lg:text-base text-start pb-1 lg:pb-2'>Social Media</h1>

    <div className='flex flex-col text-xs lg:text-base text-gray-600 text-start gap-1'>
    <p>Facebook</p>
    <p>Instagram</p>
    <p>Twitter</p>
    </div>


</div>

                    </div>

</div>
                <p className='text-center pt-4 text-xs md:text-sm lg:text-base text-gray-600'>©Copyright-2024 - Created by Hammad Ansari</p>

            </div>
        </>
    )
}

export default Footer