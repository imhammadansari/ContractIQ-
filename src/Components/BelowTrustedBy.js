import React from 'react'

const BelowTrustedBy = () => {
  return (
    <>
    <div className='flex flex-col bg-black px-4 lg:px-10 py-4 lg:py-6 justify-center items-center'> {/*Parent Div */}
      <h1 className='text-red-600 font-bold text-2xl text-center pb-4'>Target Audience</h1>
        <div className='flex gap-8 text-gray-400 items-center justify-between'> {/*Child Div */}

            <div className='flex flex-col gap-4'> {/*Image Div */}
                <img className='w-[20rem]' src='/target-audience.jpeg' />

            </div> {/*Image Div */}

            <div className='flex flex-col w-1/2 gap-2'> {/*Content Div */}
            <div className='w-[30rem]'> {/*Text 1 Div */}
            <h1 className='font-bold text-xl text-start w-[23rem]'>Smart Contract Auditing</h1> 
            <p className='text-start text-xs'>Smart Contract Developers: Developers building decentralized applications (dApps) and DeFi 
              protocols looking to improve the security and performance of their Ethereum smart contracts.</p>
            </div> {/*Text 1 Div */}

            <div className='w-[30rem]'> {/*Text 2 Div */}
            <h1 className='font-bold text-xl text-start w-[23rem]'>Traders & Investors</h1>
            <p className='text-start text-xs'>Ethereum traders and investors who want to analyze smart contract risks before interacting 
              with DeFi protocols or new token launches.</p>
            </div> {/*Text 2 Div */}
            
            <div className='w-[30rem]'> {/*Text 3 Div */}
            <h1 className='font-bold text-xl text-start w-[23rem]'>Auditors & Security Experts</h1>
            <p className='text-start text-xs'>Security professionals seeking to streamline and automate the audit process, providing 
              faster reviews and recommendations.</p>
            </div> {/*Text 3 Div */}
            
            <div className='w-[30rem]'> {/*Text 4 Div */}
            <h1 className='font-bold text-xl text-start w-[23rem]'>Blockchain Companies</h1>
            <p className='text-start text-xs'>Enterprises developing blockchain solutions who need a scalable way 
              to maintain the integrity and performance of their smart contracts.</p>
            </div> {/*Text 4 Div */}
            </div> {/*Content Div */}
 


        </div> {/*Child Div */}
    </div> {/*Parent Div */}
    </>
  )
}

export default BelowTrustedBy