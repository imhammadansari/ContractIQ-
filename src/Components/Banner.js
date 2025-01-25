import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='w-full px-4 md:px-8 lg:px-10 py-4' style={{
            background: "linear-gradient(to right, #f2f2f4, #cccccc)",
        }}> {/*Parent div*/}

        <div className='md:px-4 py-2 flex flex-col w-full items-center'> {/*Child div*/}

        <div className='flex flex-col text-center items-center w-full lg:px-6 lg:py-6'> {/*Heading div*/}
            <h1 className='text-xs text-gray-600 border border-gray-600 border-opacity-40 px-1 py-1 lg:px-2 lg:py-2'>Intelligent Auditing & Optimization for Ethereum Smart Contracts.</h1>
            <h1 className='text-5xl md:text-4xl lg:text-7xl lg:w-[30rem] text-center text-gray-600 lg:font-bold'>ContractIQ Ai</h1>
            <p className='text-gray-600 text-xs w-[20rem] pt-2 lg:pt-0 lg:w-1/2'>
            ContractIQ is an AI-driven platform that automatically audits, optimizes, and educates developers and traders on Ethereum 
            smart contracts. Our mission is to enhance the security, efficiency, and knowledge surrounding smart contracts to create a
             safer and more optimized blockchain ecosystem.
            </p>
            
            
        </div> {/*Heading div*/}

        <div className='flex w-full pt-2 lg:pt-0 justify-center'> {/*Banner Image div*/}
            {/* <img className='' src='/banner-01.jpg' alt='students' /> */}
        </div> {/*Banner Image div*/}

        </div> {/*Child div*/}

    </div> {/*Parent div*/}
    </>
  )
}

export default Banner