import React from 'react'

export default function Footer() {
  return (
    <div className="w-full px-12 py-12 mt-4">
      <div className="mx-auto h-52 bg-gray-500 rounded-lg">
      
      <div className='w-full mt-4'>
        <div className='bg-cyan-800 p-8 font-bold rounded-lg'>
          <p className="text-white">Let Full Self-Driving (Supervised) Navigate You Home</p>
        </div>
        <div className='bg-blue-800 p-8 mt-6 rounded-lg'>
          <p className="text-white">Give it 110%. At the end of your day, activate Full Self-Driving 
            (Supervised) and your Model Y can navigate you back home. Full Self-Driving (Supervised) unlocks more features. All Tesla vehicles are equipped with active safety features including Automatic Emergency Braking 
            when obstacles get too close and Lane Departure Avoidance to keep you in your lane. Feature availability dependent upon local 
            governmental approvals.</p>
        </div>
      </div>
      <div className='w-full px-180'>
        <div className='bg-red-300 p-4 mt-6 w-72 h-28 rounded-lg'>
          <div className='flex justify-between space-x-4'>
            <div className='bg-gray-200 p-4 h-100 rounded-lg '>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 1 Title</h3>
              <p className='text-black'>This is the description for card 1. You can put any content here.</p>
            </div>
            <div className='bg-gray-200 p-4 h-24 rounded-lg'>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 2 Title</h3>
              <p className='text-black'>This is the description for card 2. You can put any content here.</p>
            </div>
            <div className='bg-gray-200 p-4 h-24 rounded-lg '>
              <h3 className='font-bold text-lg mb-2 text-black'>Card 3 Title</h3>
              <p className='text-black'>This is the description for card 3. You can put any content here.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-60 py-12 mt-4'>
        <div className='mx-auto h-307 bg-green-800 rounded-lg'></div>
      </div>
    </div>
  );
}
