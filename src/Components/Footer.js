import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='w-full border-t border-black border-opacity-30 bg-black px-4 lg:px-20 py-4'>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-20'>

                    <div className='flex flex-col lg:w-[20rem]'>
                    <img className="w-20 lg:w-24" src='/logo1.png' />
                        
                    </div>

                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-red-600 lg:text-base text-start lg:pb-2'>ContractIQ </h1>

                        <div className='flex lg:flex-col text-xs lg:text-base text-gray-400 text-start gap-4 lg:gap-0'>
                        <p>Intoduction</p>
                        <p>Features</p>
                        <p>Our Techlogy</p>
                        <p>Revenue Models</p>
                        <p>Marketing Strategy</p>

                        </div>

                    </div>


                    <div className='flex flex-col items-start'>

                    <h1 className='font-bold text-sm md:text-base text-red-600 lg:text-base text-start lg:pb-2'>ContractIQ </h1>

                    <div className='flex lg:flex-col text-xs lg:text-base text-gray-400 text-start gap-4 lg:gap-0'>
                        <p>Intoduction</p>
                        <p>Features</p>
                        <p>Our Techlogy</p>
                        <p>Revenue Models</p>
                        <p>Marketing Strategy</p>
                        </div>

                    </div>


                

<div className='flex flex-col items-start'>

    <h1 className='font-bold text-sm md:text-base lg:text-base text-red-600 text-start lg:pb-2'>Social Media</h1>

    <div className='flex lg:flex-col text-xs text-start gap-16 text-gray-400 lg:gap-0 lg:text-base'>
    <p>FB</p>
    <p>Insta</p>
    <p>Twitter</p>
    <p>Youtube</p>
    </div>
</div>


</div>
                <p className='text-center pt-4 text-xs md:text-sm lg:text-base text-red-600'>©Copyright-2024 - Created by Hammad Ansari</p>

            </div>
        </>
    )
}

export default Footer