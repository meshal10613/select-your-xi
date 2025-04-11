import React from 'react';

const SelectedPlayer = ({choosePlayer}) => {
    console.log(choosePlayer)
    return (
        <div>
            <p>{choosePlayer.length}</p>
            {
                choosePlayer.map(choose =>
                    <div>
                        <h1>{choose.name}</h1>
                    </div>
                )
            }
        </div>
    );
};

export default SelectedPlayer;