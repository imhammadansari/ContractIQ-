import React from 'react'

const WhoWeAre = () => {
  return (
    <>
    <div className=' px-6 lg:px-20 py-4 flex flex-col items-center' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div*/}
        <h1 className='font-bold text-gray-600 pb-2 text-center text-2xl'>Who We Are</h1>
        <div className='flex flex-col gap-4 items-center justify-between'> {/*Child Div*/}
        <div className='lg:w-1/2 text-gray-600 text-start'> {/*Content Div*/}
        <p className='text-xs md:text-sm lg:text-lg'>
        At <span className='font-bold'>ContractIQ</span>, we are passionate about enhancing the security, efficiency, and transparency of Ethereum smart contracts.
         As an AI-driven platform, we specialize in auditing, optimizing, and educating developers and traders on best practices 
         for smart contract development.
        </p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Our mission is simple yet impactful: </span>
        To build a safer and more optimized blockchain ecosystem by leveraging cutting-edge technology and empowering the Ethereum 
        community with the tools and knowledge needed to succeed.</p>
        </div> {/*Content Div*/}

        <div> {/*Image Section*/}
            <img className='lg:w-[40rem]' src='/who-we-are-01.jpg' />
        </div> {/*Image Section*/}
        </div> {/*Child Div*/}
    </div> {/*Parent Div*/}
    </>
  )
}

export default WhoWeAre