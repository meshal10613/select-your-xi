import React from 'react';

const SelectedPlayer = ({choosePlayer, removeSelectedPlayers, addMorePlayer}) => {
    return (
        <div>
            <div>
                {
                    choosePlayer.map(choose =>
                        <div className='border-2 border-gray-300 rounded-xl py-3 px-5 flex justify-between items-center my-7'>
                            <div className='flex gap-5'>
                                <div>
                                    <img src="./meshal.jpg" alt="" className='w-16 h-16 rounded-xl'/>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>{choose.name}</h1>
                                    <p className='text-gray-500 font-semibold'>{choose.battingType}</p>
                                </div>
                            </div>
                            <div onClick={() => removeSelectedPlayers(choose)} className='text-red-400 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <button onClick={() => addMorePlayer()} className='btn py-2 px-4 cursor-pointer bg-[#E7FE29] text-black text-xl rounded-md'>Add More Player</button>
            </div>
        </div>
    );
};

export default SelectedPlayer;