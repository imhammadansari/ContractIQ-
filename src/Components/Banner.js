import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='w-full px-4 md:px-8 lg:px-10 bg-black py-4'> {/*Parent div*/}

        <div className='px-2 md:px-4 py-2 flex flex-col w-full items-center'> {/*Child div*/}

        <div className='flex flex-col text-center items-center w-full px-6 py-6'> {/*Heading div*/}
            <h1 className='text-xs text-gray-400 border border-gray-400 border-opacity-20 px-2 py-2'>Intelligent Auditing & Optimization for Ethereum Smart Contracts.</h1>
            <h1 className='text-lg md:text-xl lg:text-7xl lg:w-[30rem] text-center text-gray-400 lg:font-bold'>ContractIQ Ai</h1>
            <p className='text-gray-400 text-xs w-1/2'>
            ContractIQ is an AI-driven platform that automatically audits, optimizes, and educates developers and traders on Ethereum 
            smart contracts. Our mission is to enhance the security, efficiency, and knowledge surrounding smart contracts to create a
             safer and more optimized blockchain ecosystem.
            </p>
            
            
        </div> {/*Heading div*/}

        <div className='flex w-1/2 justify-center'> {/*Banner Image div*/}
            <img className='' src='/banner.jpeg' alt='students' />
        </div> {/*Banner Image div*/}

        </div> {/*Child div*/}

    </div> {/*Parent div*/}
    </>
  )
}

export default Banner