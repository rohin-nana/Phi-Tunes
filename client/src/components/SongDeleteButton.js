//import React, { useEffect, useState } from 'react';
import './SongDeleteButton.css';
import Axios from 'axios';

const SongDeleteButton = (songInfo) => {
    
    function deleteSong() {
        Axios.post("http://localhost:3001/songDelete", {
            song: songInfo.song, 
            artist: songInfo.artist
        })
        .then(response => {
            console.log(response);
            window.location.reload();
        }).catch(error => {
            console.log("Error: " + error)
        });
    }

    return (
        <div className="SongDeleteButton">
            <button className="DeleteButton" onClick={() => { deleteSong(); }}>
                <div className="DeleteButtonText">
                    X
                </div>
            </button>
        </div>
    )
}

export default SongDeleteButton;