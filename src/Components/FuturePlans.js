import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FuturePlans = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-2 px-4 lg:px-10 py-4' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}>
        <h1 className='text-gray-600 text-center text-2xl font-bold pb-2'>Future Plans</h1>

        <div className='flex flex-col lg:flex-row gap-2 w-3/4 lg:w-2/3 justify-between items-center'>
            <div className='flex flex-col lg:w-1/2'>
            <h1 className='text-gray-600 text-start font-bold'>Phase 1</h1>
                <p className='text-gray-600 text-start text-xs lg:text-sm'>Launch a basic version with auditing and optimization features.
                Focus on a user-friendly interface for smart contract uploads, audit results, and optimization feedback.</p>
            <h1 className='text-gray-600 text-start font-bold'>Phase 2</h1>
                <p className='text-gray-600 text-start text-xs lg:text-sm'>Release educational resources, personalized learning paths, and interactive tutorials for developers.
                Expand contract performance metrics and historical analytics dashboard.</p>
                
            </div>
            
                <LazyLoadImage className='w-[20rem]' src='/futureImage3.jpg' effect='blur' loading='lazy'/>
           </div>

        <div className='flex flex-col lg:flex-row gap-2 w-3/4 lg:w-2/3 justify-between items-center'>
                <LazyLoadImage className='w-[20rem]' src='/futureImage2.jpeg' effect='blur' loading='lazy'/>
            <div className='flex flex-col lg:w-1/2'>
            <h1 className='text-gray-600 text-start font-bold'>Phase 3</h1>
                <p className='text-gray-600 text-start text-xs lg:text-sm'>AI-driven predictive modeling for contract vulnerabilities before they occur.
                Full enterprise-level solutions with API integration for large-scale blockchain companies.</p>
            <h1 className='text-gray-600 text-start font-bold'>Phase 4</h1>
                <p className='text-gray-600 text-start text-xs lg:text-sm'>Integration with other blockchains (e.g., Binance Smart Chain, Polkadot) for cross-platform support.
                Incorporate decentralized autonomous organization (DAO) features for contract reviews by community experts.</p>
                

            </div>
           </div>

    </div>
    </>
  )
}

export default FuturePlans