import React from 'react'

export default function Footer() {
  return (

    <div className="w-full px-12 py-12 mt-4">
      {/* self-driving vdo */}
      <div className='bg-gray-700 h-[400px]'></div>
      <div className='w-full mt-10'>
        {/* title */}
        <div className='bg-cyan-800 p-8 mt-10 font-bold rounded-lg'>
          <p className="text-white">Let Full Self-Driving (Supervised) Navigate You Home</p>
        </div>
        {/* subtitle */}
        <div className='bg-blue-800 p-8 mt-10 rounded-lg'>
          <p className="text-white">Give it 110%. At the end of your day, activate Full Self-Driving 
            (Supervised) and your Model Y can navigate you back home. Full Self-Driving (Supervised) unlocks more features. All Tesla vehicles are equipped with active safety features including Automatic Emergency Braking 
            when obstacles get too close and Lane Departure Avoidance to keep you in your lane. Feature availability dependent upon local 
            governmental approvals.</p>
        </div>
      </div>
      <div className='w-full mt-10 px-12'>
        {/* 3 small cards with icon */}
        <div className='bg-red-300 p-4 mt-6 h-[450px] rounded-lg'>
          <div className='flex justify-between space-x-6'>
            <div className='bg-gray-200 p-4 h-[400px] rounded-lg '>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 1 Title</h3>
              <p className='text-black'>This is the description for card 1. You can put any content here.</p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg'>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 2 Title</h3>
              <p className='text-black'>This is the description for card 2. You can put any content here.</p>
            </div>
            <div className='bg-gray-200 p-4 rounded-lg '>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 3 Title</h3>
              <p className='text-black'>This is the description for card 3. You can put any content here.</p>
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className='w-full py-12'>
        <div className='bg-blue-300 h-[800px]'></div>
      </div>
      {/* title */}
      <div className='bg-amber-200 p-8 mt-10 font-bold rounded-lg'>
        <p>jverjfie</p>
      </div>
      {/* subtitle */}
      <div className='bg-amber-800 p-8 mt-10 rounded-lg'>
        <p>buvaehfiawe</p>
      </div>
    </div>
  );
}
