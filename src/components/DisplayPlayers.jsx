import React, { useEffect, useState } from 'react';
import '../../src/App.css'
import Player from './Player';
import SelectedPlayer from './SelectedPlayer';

const DisplayPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [choosePlayer, setChoosePlayer] = useState([]);
    const [selectedPlr, setSelectedPlr] = useState(0);
    useEffect(() => {
            fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
        }
    , []);
    const handleBtn1 = () => {
        document.getElementById("first-title").style.display = "block";
        document.getElementById("second-title").style.display = "none";

        document.getElementById("first-btn").style.backgroundColor = "#E7FE29";
        document.getElementById("first-btn").style.color = "black";
        document.getElementById("second-btn").style.backgroundColor = "white";
        document.getElementById("second-btn").style.color = "#9E9E9E";

        document.getElementById("available-p").style.display = "grid";
        document.getElementById("selected-p").style.display = "none";
    };

    const handleBtn2 = () => {
        document.getElementById("first-title").style.display = "none";
        document.getElementById("second-title").style.display = "block";

        document.getElementById("first-btn").style.backgroundColor = "white";
        document.getElementById("first-btn").style.color = "#9E9E9E";
        document.getElementById("second-btn").style.backgroundColor = "#E7FE29";
        document.getElementById("second-btn").style.color = "black";

        document.getElementById("available-p").style.display = "none";
        document.getElementById("selected-p").style.display = "block";
    };

    const SelectedPlayers = (player) => {
        if(selectedPlr < 6){
            if(!choosePlayer.includes(player)){
                const newPlayer = [...choosePlayer, player] ;
                setChoosePlayer(newPlayer)
                setSelectedPlr(selectedPlr + 1);
            }
        }else{
            setSelectedPlr(6)
        }
    }

    const removeSelectedPlayers = (choose) => {
        const newRemove = choosePlayer.filter((favorite) => favorite.playerId !== choose.playerId);
        setChoosePlayer(newRemove);
        setSelectedPlr(selectedPlr - 1);
    }

    const addMorePlayer = () => {
        document.getElementById("first-title").style.display = "block";
        document.getElementById("second-title").style.display = "none";

        document.getElementById("first-btn").style.backgroundColor = "#E7FE29";
        document.getElementById("first-btn").style.color = "black";
        document.getElementById("second-btn").style.backgroundColor = "white";
        document.getElementById("second-btn").style.color = "#9E9E9E";

        document.getElementById("available-p").style.display = "grid";
        document.getElementById("selected-p").style.display = "none";
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center my-10'>
                <div>
                    <h1 className='text-2xl font-bold'>
                        <span id='first-title'>Available Players </span>
                        <span id='second-title' className='hidden'>Selected Players ({selectedPlr}/6)</span>
                    </h1>
                </div>
                <div className='flex'>
                    <button id='first-btn' onClick={() => {handleBtn1()}} className='btn1 btn md:py-2 md:px-4 cursor-pointer bg-[#E7FE29] text-black text-xl'>Available</button>
                    <button id='second-btn' onClick={() => {handleBtn2()}} className='btn2 btn md:py-2 md:px-4 cursor-pointer text-[#9E9E9E] text-xl'>Selected ({selectedPlr})</button>
                </div>
            </div>
            <div>
                <div id='available-p' className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        players.map(player => <Player 
                            key={player.playerId} 
                            player={player}
                            SelectedPlayers={SelectedPlayers}></Player>)
                    }
                </div>
                <div id='selected-p' className='hidden'>
                    <SelectedPlayer
                        choosePlayer={choosePlayer}
                        removeSelectedPlayers={removeSelectedPlayers}
                        addMorePlayer={addMorePlayer}>
                    </SelectedPlayer>
                </div>
            </div>
        </div>
    );
};

export default DisplayPlayers;