import React from 'react'

const BrandingAndDesign = () => {
  return (
    <>
    <div className='bg-black flex flex-col px-4 lg:px-10 py-4'> {/*Parent Div */}
        <h1 className='font-bold text-2xl text-red-600 text-center pb-4'>Branding & Design</h1>
        <div className='flex flex-col lg:flex-row gap-4 justify-center'> {/*Child Div */}
            <div className='flex flex-col px-2 py-2 bg-red-600 items-center lg:w-1/4'>
            <img className='w-10 lg:w-20' src='/pen-tool.png' />
            <h1 className='pt-2 font-bold'>Logo Design</h1>
            <p className='text-xs lg:text-sm '>A sleek, modern logo that combines elements of blockchain and intelligence, such as a shield (representing security) 
                combined with a brain or circuit motif (representing AI and intellect)</p>
            </div>
            
            <div className='flex flex-col bg-red-600 px-4 py-4 items-center lg:w-1/4'>
            <img className='w-10 lg:w-20' src='/palette.png' />
            <h1 className='pt-2 font-bold'>Color Palette</h1>
            <p className='text-xs lg:text-sm '>Use colors like deep blue (trust, security), white (simplicity, clarity), and green (growth, optimization) to reflect 
                the project's focus on security and knowledge.</p>
            </div>
            
            <div className='flex flex-col bg-red-600 py-4 px-4 items-center lg:w-1/4'>
            <img className='w-10 lg:w-20' src='/microphone.png' />
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