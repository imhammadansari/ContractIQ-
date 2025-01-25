import React from 'react'

const WhyUs = () => {
  return (
    <>
    <div className='px-6 lg:px-20 py-4 flex flex-col' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div*/}
        <h1 className='text-center text-2xl pb-2 font-bold text-gray-600'>Why Us</h1>
        <div className='flex flex-col gap-4 lg:gap-20 lg:flex-row justify-center items-center'> {/*Child Div*/}
        <div className='lg:w-1/2 text-gray-600 text-start'> {/*Content Div*/}

        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>AI-Powered Precision: </span>Our advanced algorithms provide highly accurate audits and 
        optimization suggestions, ensuring your contracts are secure and efficient.</p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Developer-Focused Tools: </span>From real-time feedback to personalized dashboards, we empower 
        developers to create safer, faster, and more reliable smart contracts</p>
        <p className='text-xs md:text-sm lg:text-lg'><span className='font-bold'>Commitment to Excellence: </span>Whether you’re a developer, trader, or enterprise, our platform
         is tailored to meet your unique needs while promoting a secure blockchain environment.</p>
        </div> {/*Content Div*/}

        <div> {/*Image Section*/}
            <img className='lg:w-[23rem]' src='/why-us.jpg' />
        </div> {/*Image Section*/}
        </div> {/*Child Div*/}
    </div> {/*Parent Div*/}
    </>
  )
}

export default WhyUs