import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BelowTrustedBy = () => {
  return (
    <>
    <div className='flex flex-col px-4 lg:px-10 py-4 lg:py-6 justify-center items-center' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div */}
      <h1 className='text-gray-600 font-bold text-2xl text-center pb-4'>Target Audience</h1>
        <div className='flex-col lg:flex-row lg:flex lg:gap-8 text-gray-600 items-center justify-between'> {/*Child Div */}

            <div className='flex flex-col lg:gap-4'> {/*Image Div */}
                <LazyLoadImage className='lg:w-[20rem]' src='/target-aud2.jpg' effect='blur' loading='lazy' />

            </div> {/*Image Div */}

            <div className='flex flex-col w-full pt-4 lg:pt-0 lg:w-1/2 gap-2'> {/*Content Div */}
            <div className='w-full lg:w-[30rem]'> {/*Text 1 Div */}
            <h1 className='font-bold text-sm lg:text-xl text-start lg:w-[23rem]'>Smart Contract Auditing</h1> 
            <p className='text-start text-xs'>Smart Contract Developers: Developers building decentralized applications (dApps) and DeFi 
              protocols looking to improve the security and performance of their Ethereum smart contracts.</p>
            </div> {/*Text 1 Div */}

            <div className='w-full lg:w-[30rem]'> {/*Text 2 Div */}
            <h1 className='font-bold text-sm lg:text-xl text-start lg:w-[23rem]'>Traders & Investors</h1>
            <p className='text-start text-xs'>Ethereum traders and investors who want to analyze smart contract risks before interacting 
              with DeFi protocols or new token launches.</p>
            </div> {/*Text 2 Div */}
            
            <div className='w-full lg:w-[30rem]'> {/*Text 3 Div */}
            <h1 className='font-bold text-sm lg:text-xl text-start lg:w-[23rem]'>Auditors & Security Experts</h1>
            <p className='text-start text-xs'>Security professionals seeking to streamline and automate the audit process, providing 
              faster reviews and recommendations.</p>
            </div> {/*Text 3 Div */}
            
            <div className='w-full lg:w-[30rem]'> {/*Text 4 Div */}
            <h1 className='font-bold text-sm lg:text-xl text-start lg:w-[23rem]'>Blockchain Companies</h1>
            <p className='text-start text-xs'>Enterprises developing blockchain solutions who need a scalable way 
              to maintain the integrity and performance of their smart contracts.</p>
            </div> {/*Text 4 Div */}
            </div> {/*Content Div */}

        </div> {/*Child Div */}

        <div className='hidden text-gray-600 items-center justify-between'> {/*Child Div */}

            <div className='flex flex-col lg:gap-4'> {/*Image Div */}
                <LazyLoadImage className='w-[15rem] lg:w-[20rem]' src='/target-aud2.jpg' effect='blur' loading='lazy' />

            </div> {/*Image Div */}

            <div className='flex flex-col w-1/2 gap-2'> {/*Content Div */}
            <details className='w-[13rem] lg:w-[30rem]'> {/*Text 1 Div */}
            <summary className='font-bold text-xs lg:text-xl text-start lg:w-[23rem]'>Smart Contract Auditing</summary> 
            <p className='text-start w-[12rem] text-xs'>Smart Contract Developers: Developers building decentralized applications (dApps) and DeFi 
              protocols looking to improve the security and performance of their Ethereum smart contracts.</p>
            </details> {/*Text 1 Div */}

            <details className='w-[13rem] lg:w-[30rem]'> {/*Text 2 Div */}
            <summary className='font-bold text-xs lg:text-xl text-start lg:w-[23rem]'>Traders & Investors</summary>
            <p className='text-start w-[12rem] text-xs'>Ethereum traders and investors who want to analyze smart contract risks before interacting 
              with DeFi protocols or new token launches.</p>
            </details> {/*Text 2 Div */}
            
            <details className='w-[13rem] lg:w-[30rem]'> {/*Text 3 Div */}
            <summary className='font-bold text-xs lg:text-xl text-start lg:w-[23rem]'>Auditors & Security Experts</summary>
            <p className='text-start w-[12rem] text-xs'>Security professionals seeking to streamline and automate the audit process, providing 
              faster reviews and recommendations.</p>
            </details> {/*Text 3 Div */}
            
            <details className='w-[13rem] lg:w-[30rem]'> {/*Text 4 Div */}
            <summary className='font-bold text-xs lg:text-xl text-start lg:w-[23rem]'>Blockchain Companies</summary>
            <p className='text-start w-[12rem] text-xs'>Enterprises developing blockchain solutions who need a scalable way 
              to maintain the integrity and performance of their smart contracts.</p>
            </details> {/*Text 4 Div */}
            </div> {/*Content Div */}
 
        </div> {/*Child Div */}
    </div> {/*Parent Div */}
    </>
  )
}

export default BelowTrustedBy