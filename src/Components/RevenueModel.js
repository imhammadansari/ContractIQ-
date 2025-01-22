import React from 'react'

const RevenueModel = () => {
  return (
    <>
    <div className='bg-black flex flex-col items-center px-4 lg:px-10 py-4'> {/*Parent Div */}
        <h1 className='text-2xl font-bold text-red-600 text-center pb-4'>Revenue Model</h1>

        <div> {/*Child Div */}
                <div className='flex gap-4'> {/*Marquee Parent Div */}
                
                <div className='flex flex-col gap-2 w-[17rem] px-2 py-1 border border-gray-400 overflow-hidden'>
                    <h1 className='text-gray-400 text-center'>Freemium Model</h1>
                    <p className='text-gray-400 text-xs text-start whitespace-normal'>Free Tier: Basic audit features with limited contract analysis (e.g., scanning for common vulnerabilities).
                    Premium Tier: Full access to advanced features like gas optimization, comprehensive educational resources, and detailed analytics.</p>
                </div>
                
                <div className='flex flex-col gap-2 w-[17rem] px-2 py-2 border border-gray-400 overflow-hidden'>
                    <h1 className='text-gray-400 text-center'>Subscription Plans</h1>
                    <p className='text-gray-400 text-xs text-start whitespace-normal'>Monthly/annual subscription fees for developers and teams seeking 
                        ongoing contract audits, optimization suggestions, and tailored educational resources.
                    </p>
                </div>
                
                <div className='flex flex-col gap-2 w-[17rem] px-2 py-2 border border-gray-400 overflow-hidden'>
                    <h1 className='text-gray-400 text-center'>Enterprise Solutions</h1>
                    <p className='text-gray-400 text-xs text-start whitespace-normal'>Custom pricing for large enterprises, blockchain projects, or DeFi
                        platforms that need scalable auditing solutions and integration with their development pipelines.
                    </p>
                </div>
                
                <div className='flex flex-col gap-2 w-[17rem] px-2 py-2 border border-gray-400 overflow-hidden'>
                    <h1 className='text-gray-400 text-center'>On-Demand Auditing</h1>
                    <p className='text-gray-400 text-xs text-start whitespace-normal'>Pay-per-audit model for one-time contract audits for developers or 
                        businesses who don’t need continuous monitoring but want specific contract audits before deployment.
                    </p>
                </div>

                </div> {/*Marquee Parent Div */}

        </div> {/*Child Div */}

    </div> {/*Parent Div */}
    </>
  )
}

export default RevenueModel
