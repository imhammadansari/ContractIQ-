import React from 'react'

const CoreFeatures = () => {
  return (
    <>
    <div className='bg-black flex flex-col gap-4 px-4 lg:px-28 py-4'> {/*Parent Div */}
      
      <h1 className='text-xl lg:text-2xl text-red-600 text-center font-bold'>Core Features</h1>
        <div className='flex justify-between'> {/*Child Div */}

          <div className='flex flex-col w-[25rem] lg:w-[30rem] items-center'> {/*Smart Contract Secton */}
            <div className='flex items-center'> {/*Image Secton */}
            <img src='/smart-contract.png' alt='smart-contract' className='w-16 lg:w-28' />
            </div> {/*Image Secton */}

            <div className='flex flex-col items-center'> {/*Content Secton */}
            <h1 className='text-sm lg:text-base font-bold text-gray-400 text-center'>Smart Contract Auditing</h1>
              <p className='text-gray-400 hidden md:block lg:text-center lg:text-sm'>
              <span className='font-bold'>Automated Code Review:</span> ContractIQ uses AI and machine learning to analyze smart contract code for potential vulnerabilities, 
              bugs, and inefficiencies.
              </p>
              <p className='text-gray-400 hidden md:block lg:text-center lg:text-sm'>
              <span className='font-bold'>Security Vulnerabilities Detection:</span> The platform scans for common vulnerabilities like reentrancy, integer 
              overflow/underflow, and gas optimization issues.
              </p>
              <p className='text-gray-400 hidden md:block lg:text-center lg:text-sm'>
              <span className='font-bold'>Compliance Checks:</span> Ensures smart contracts follow industry best practices, compliance standards, and common Ethereum 
              security guidelines.
              </p>
            </div>

          </div> {/*Smart Contract Secton */}
          
          <div className='flex flex-col w-[25rem] lg:w-[30rem] items-center'> {/*Educational Insights Secton */}
            <div className='flex items-center'> {/*Image Secton */}
            <img src='/education-insights1.png' alt='education-insights' className='w-[3.8rem] lg:w-28' />
            </div> {/*Image Secton */}

            <div className='flex flex-col items-center'> {/*Content Secton */}
            <h1 className='text-sm lg:text-base font-bold text-gray-400 text-center lg:pb-0'>Educational Insights</h1>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>In-App Education: </span>Provides real-time feedback, recommendations, and best practices for developers to improve their coding skills.
              </p>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Smart Contract Security Guides:</span>Access to an extensive library of tutorials, whitepapers, and resources explaining Ethereum contract vulnerabilities and optimizations.
              </p>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Developer Dashboard: </span>Personalized learning paths based on user interaction, showing their development progress, and suggested improvements.
              </p>
            </div>

          </div> {/*Educational Insights Secton */}

        </div> {/*Child Div */}
        
        <div className='flex justify-between'> {/*Child Div */}

          <div className='flex flex-col w-[25rem] lg:w-[30rem] items-center'> {/*Optimization Secton */}
            <div className='flex items-center'> {/*Image Secton */}
            <img src='/optimization.png' alt='optimization' className='w-16 lg:w-28' />
            </div> {/*Image Secton */}

            <div className='flex flex-col items-center'> {/*Content Secton */}
            <h1 className='text-sm lg:text-base font-bold text-gray-400 text-center pb-2 lg:pb-0'>Optimization</h1>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Gas Optimization: </span>AI identifies areas of a smart contract’s code where gas usage can be minimized, ensuring cost-effective transactions.
              </p>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Code Efficiency: </span>The system reviews the code for redundancies, simplifying logic, and making the contract run faster and smoother.
              </p>
            </div>

          </div> {/*Optimization Secton */}

          <div className='flex flex-col w-[25rem] lg:w-[30rem] items-center'> {/*Integration with Developer Tools  Secton */}
            <div className='flex items-center'> {/*Image Secton */}
            <img src='/integration-tools.png' alt='integration-tools' className='w-16 lg:w-28' />
            </div> {/*Image Secton */}

            <div className='flex flex-col items-center'> {/*Content Secton */}
            <h1 className='hidden text-sm lg:text-base font-bold text-gray-400 text-center pb-2 lg:pb-0'>Integration with Developer Tools</h1>
            <h1 className='text-sm lg:hidden font-bold text-gray-400 text-center pb-2 lg:pb-0'>Integration Tools</h1>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>IDE Integration:</span>Plugin for popular development environments like Visual Studio Code to provide seamless audits during development.
              </p>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Smart Contract Deployment: </span>Automatically trigger an audit before deployment, reducing the risk of vulnerabilities in the live environment.

              </p>

            </div>

          </div> {/*Integration with Developer Tools Secton */}
          

        </div> {/*Child Div */}
        
        <div className='flex justify-center w-full'> {/*Child Div */}

          <div className='flex flex-col w-[30rem] items-center'> {/*Analytics  Secton */}
            <div className='flex items-center'> {/*Image Secton */}
            <img src='/dashboard-monitor.png' alt='Analytics' className='w-16 lg:w-28' />
            </div> {/*Image Secton */}

            <div className='flex flex-col items-center'> {/*Content Secton */}
            <h1 className='ext-sm lg:text-base font-bold text-gray-400 text-center pb-2 lg:pb-0'>Analytics Dashboard</h1>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Contract Performance Metrics:</span>Real-time data on contract performance, including transaction volume, failure rates, and gas consumption.
              </p>
              <p className='text-gray-400 hidden md:block text-sm'>
              <span className='font-bold'>Audit History: </span>A transparent audit trail that logs past audits and optimizations for future reference.

              </p>

            </div>

          </div> {/*Analytics Secton */}
          

        </div> {/*Child Div */}
    </div> {/*Parent Div */}
    </>
  )
}

export default CoreFeatures