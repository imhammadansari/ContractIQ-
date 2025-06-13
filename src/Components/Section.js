import React from 'react'
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Section = () => {
  return (
    <>
    <div id="technology" className='px-4 lg:px-10 py-4 flex flex-col gap-4 justify-center items-center' style={{
            background: "linear-gradient(to right, #e8e8ea, #f0f0f1, #ffffff)",
        }}> {/*Parent Div */}
    <h1 className='font-bold text-2xl text-gray-600 text-center pb-2'>Technology Stack</h1>

        <div className='w-full lg:w-[55rem] flex flex-col lg:flex-row justify-between'> {/*Child Div */}

            <div className='flex flex-col gap-4 lg:w-1/2'> {/*Content Div */}
                <div className='flex flex-col'> {/*Ai Machine Section */}
                <h1 className='text-sm lg:text-2xl font-bold text-start text-gray-600'>AI & Machine Learning</h1>
                <p className='text-gray-600 text-start text-xs'>ContractIQ leverages cutting-edge AI algorithms for code analysis and 
                  optimization suggestions. This includes natural language processing (NLP) for understanding code context and machine
                   learning models trained on large Ethereum contract datasets to detect security vulnerabilities.</p>
                </div> {/*Ai Machine Section */}

                <div className='flex flex-col'> {/*Smart Contracts Section */}
                <h1 className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Blockchain & Smart Contracts</h1>
                <p className='text-gray-600 text-start text-xs'>ContractIQ interacts with Ethereum's blockchain to provide real-time 
                  contract analysis. It also integrates with Ethereum's testing networks (Ropsten, Rinkeby, etc.) for auditing before 
                  deployment.</p>
            </div> {/*Smart Contracts Section */}
                
              <div className='flex flex-col'> {/*Data Analytics Tools Section */}
              <h1 className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Data Analytics Tools</h1>
              <p className='text-gray-600 text-start text-xs'>Advanced data analytics tools for tracking performance and presenting audit
                 results in an easily digestible manner..</p>
            </div> {/*Data Analytics Tools Section */}
              
              <div className='flex flex-col'> {/*Frontend & User Interface Section */}
              <h1 className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Frontend & User Interface</h1>
              <p className='text-gray-600 text-start text-xs'>A user-friendly web application or mobile app that allows users to upload, audit, and optimize their smart contracts.
              Dashboards for real-time updates, contract health metrics, and educational resources.</p>
            </div> {/*Frontend & User Interface Section */}
            </div> {/*Content Div */}
           
            

            <div className='flex items-center pt-4 lg:pt-0 justify-center'> {/*Image Div */}
                <LazyLoadImage className='lg:w-[22rem]' src='/ContractIQ-Ai-01.jpg' effect='blur' loading='lazy'/>
            </div> {/*Image Div */}

        </div> {/*Child Div */}

        <div className=' justify-between hidden'> {/*Child Div */}

            <div className='flex flex-col gap-4 w-1/2'> {/*Content Div */}
                <details className='flex flex-col'> {/*Ai Machine Section */}
                <summary className='text-sm lg:text-2xl font-bold text-start text-gray-600'>AI & Machine Learning</summary>
                <p className='text-gray-600 text-start text-xs'>ContractIQ leverages cutting-edge AI algorithms for code analysis and 
                  optimization suggestions. This includes natural language processing (NLP) for understanding code context and machine
                   learning models trained on large Ethereum contract datasets to detect security vulnerabilities.</p>
                </details> {/*Ai Machine Section */}

                <details className='flex flex-col'> {/*Smart Contracts Section */}
                <summary className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Blockchain & Smart Contracts</summary>
                <p className='text-gray-600 text-start text-xs'>ContractIQ interacts with Ethereum's blockchain to provide real-time 
                  contract analysis. It also integrates with Ethereum's testing networks (Ropsten, Rinkeby, etc.) for auditing before 
                  deployment.</p>
            </details> {/*Smart Contracts Section */}
                
              <details className='flex flex-col'> {/*Data Analytics Tools Section */}
              <summary className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Data Analytics Tools</summary>
              <p className='text-gray-600 text-start text-xs'>Advanced data analytics tools for tracking performance and presenting audit
                 results in an easily digestible manner..</p>
            </details> {/*Data Analytics Tools Section */}
              
              <details className='flex flex-col'> {/*Frontend & User Interface Section */}
              <summary className='text-sm lg:text-2xl font-bold text-start text-gray-600'>Frontend & User Interface</summary>
              <p className='text-gray-600 text-start text-xs'>AA user-friendly web application or mobile app that allows users to upload, audit, and optimize their smart contracts.
              Dashboards for real-time updates, contract health metrics, and educational resources.</p>
            </details> {/*Frontend & User Interface Section */}
            </div> {/*Content Div */}
           
            

            <div className='flex items-center justify-center'> {/*Image Div */}
                <LazyLoadImage className='w-[10rem] lg:w-[22rem]' src='/ContractIQ-Ai-01.jpg' effect='blur' loading='lazy'/>
            </div> {/*Image Div */}

        </div> {/*Child Div */}

    </div> {/*Parent Div */}
    </>
  )
}

export default Section