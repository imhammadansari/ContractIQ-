import React from 'react';

const MarketingStrategy = () => {
  return (
    <>
      <div className='bg-black px-4 flex flex-col gap-4 lg:px-10 py-4'> {/* Parent Div */}
        <h1 className='text-xl lg:text-2xl text-center text-red-600 font-bold pb-2'>Marketing Strategy</h1>
        
        <div className='flex flex-col lg:flex-row gap-10 px-2 lg:px-4 justify-center'> {/* Row Container */}
          {/* First Item */}
          <div 
            className='w-full lg:w-2/5 flex flex-col px-2 py-2 text-gray-400 relative overflow-hidden' 
            style={{
              backgroundImage: 'url("/red-gray-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            {/* Content */}
            <div className="flex h-full justify-end items-end pl-4 pb-4 relative z-10">
              {/* Red Line */}
              <div className="bg-red-600 w-1 h-[5rem]"></div>
              
              {/* Text Content */}
              <div className="pl-4">
                <h1 className='text-end lg:text-start text-gray-400 text-sm lg:text-base font-semibold mb-2'>Community Engagement</h1>
                <p className='text-end lg:text-start text-gray-400 w-[12rem] lg:w-[16rem] text-sm'>
                  Build relationships with Ethereum developers, dApp developers, and security professionals through 
                  social media, developer forums, and Ethereum conferences.
                </p>
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div 
            className='w-full lg:w-2/5 flex flex-col px-2 py-2 text-gray-300 relative overflow-hidden' 
            style={{
              backgroundImage: 'url("/red-gray-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Content */}
            <div className="flex justify-end items-end h-full pl-4 pb-4 relative z-10">
              {/* Red Line */}
              <div className="bg-red-600 w-1 h-[5rem]"></div>
              
              {/* Text Content */}
              <div className="pl-4">
                <h1 className='text-end lg:text-start text-gray-400 text-sm lg:text-base font-semibold mb-2'>Partnerships & Integrations</h1>
                <p className='text-end lg:text-start text-gray-400 w-[12rem] lg:w-[16rem] text-sm'>
                  Collaborate with blockchain-based projects and Ethereum development platforms to integrate ContractIQ’s tools into 
                  their services.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col lg:flex-row gap-10 px-2 lg:px-4 justify-center'> {/* Row Container */}
          {/* First Item */}
          <div 
            className='w-full lg:w-2/5 flex flex-col px-2 py-2 text-gray-300 relative overflow-hidden' 
            style={{
              backgroundImage: 'url("/red-gray-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            {/* Content */}
            <div className="flex h-full justify-end items-end pl-4 pb-4 relative z-10">
              {/* Red Line */}
              <div className="bg-red-600 w-1 h-[5rem]"></div>
              
              {/* Text Content */}
              <div className="pl-4">
                <h1 className='text-end lg:text-start text-gray-400 text-sm lg:text-base font-semibold mb-2'>Educational Content</h1>
                <p className='hidden lg:block lg:text-start text-gray-400 w-[12rem] lg:w-[16rem] text-sm'>
                  Regular blog posts, video tutorials, and webinars on smart contract security, optimization, and best practices.
                  Host challenges or hackathons with incentives to encourage developers to test the platform and learn from its insights.
                </p>
                <p className='text-end lg:hidden text-gray-400 w-[12rem] text-sm'>
                  Regular blog posts, video tutorials, and webinars on smart contract security, optimization, and best practices.
                
                </p>
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div 
            className='w-full lg:w-2/5 flex flex-col px-2 py-2 text-gray-300 relative overflow-hidden' 
            style={{
              backgroundImage: 'url("/red-gray-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          >
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            {/* Content */}
            <div className="flex justify-end items-end h-full pl-4 pb-4 relative z-10">
              {/* Red Line */}
              <div className="bg-red-600 w-1 h-[5rem]"></div>
              
              {/* Text Content */}
              <div className="pl-4">
                <h1 className='text-end lg:text-start text-gray-400 text-sm lg:text-base font-semibold mb-2'>Referral Program</h1>
                <p className='text-end lg:text-start text-gray-400 w-[12rem] lg:w-[16rem] text-sm'>
                  Implement a referral program where existing users can earn credits or premium features by bringing new users into the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketingStrategy;
