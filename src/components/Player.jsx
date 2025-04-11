import React from 'react';

const Player = ({player, SelectedPlayers}) => {
    return (
        <div className=''>
            <div className="card bg-base-100 w-[90%] h-[50vh] shadow-sm p-5">
                <figure className="pb-5">
                    <img
                    src="./meshal.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="items-center text-center space-y-3">
                    <h2 className="card-title text-left text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                        </svg>
                        {player.name}
                    </h2>
                    <div className='flex items-center justify-between border-b border-b-gray-500 pb-3'>
                        <div className='flex justify-around items-center gap-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z" clipRule="evenodd" />
                            </svg>
                            <h2 className='text-gray-500 text-[18px]'>{player.country}</h2>
                        </div>
                        <button className='btn border-none'>{player.role}</button>
                    </div>
                    <div>
                        <div className='font-bold text-[18px] text-left flex gap-5'>
                            <h3>Rating:</h3>
                            <p className='flex gap-1'>{player.rating}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellow-400">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between text-[18px] font-semibold'>
                        <h2 className=''>{player.battingType}</h2>
                        <h2 className='text-gray-500'>{player.bowlingType}</h2>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <h1>Price: ${player.biddingPrice}</h1>
                        <button id={`pl-${player.id}`} onClick={() => {SelectedPlayers(player)}} className="btn">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;