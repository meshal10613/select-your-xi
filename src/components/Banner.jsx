import React from 'react';
import '../../src/App.css'

const Banner = ({handleFreeCredit}) => {
    return (
        <div className='my-element w-10/12 mx-auto rounded-3xl'>
            <div className='flex flex-col items-center gap-10 md:pt-14 text-center'>
                <img src="./banner-main.png" alt="" />
                <h1 className='text-white text-2xl md:text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400 md:text-xl'>Beyond Boundaries Beyond Limits</p>
                <button onClick={() => {handleFreeCredit()}} className='btn rounded-md bg-[#E7FE29] text-black font-semibold'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;