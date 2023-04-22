import React from 'react'

export interface HeroProps { }

const Hero: React.FC<HeroProps> = (_props): React.ReactElement => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center text-center flex-grow sm:flex sm:items-center sm:justify-center bg-blue-500"
            style={{
                backgroundImage: `url("https://peakfencing.com/wp-content/uploads/2019/06/Cedar-Privacy-1x4x6-2.jpg")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <span className='text-8xl mb-4 font-[poppins] font-bold'>Dr. Fence</span>
            <span className='text-6xl mb-8 font-[poppins] italic'>Professional Affordable Service</span>
            <span className='text-xl font-[poppins]'>Home Fencing Services in Colorado Springs.</span>
        </div>
    );
};

export default Hero;
