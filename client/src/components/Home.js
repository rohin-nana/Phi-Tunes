import './Home.css';
import React, { useState } from 'react';
import RequestsList from './RequestsList';
import Axios from 'axios';

function Home() {
    const [songRequest, setSongRequest] = useState("");
    const [artistRequest, setArtistRequest] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submitRequest = () => {
        if (songRequest===""|| artistRequest==="") {
            setErrorMessage("Cannot leave input blank");
        } else {
            console.log("test");
            Axios.post("http://localhost:3001/songInsert", {
                song: songRequest,
                artist: artistRequest
            })
            .then(() => {
                window.location.href="http://localhost:3000/submitted";
            })
            .catch(function (error) {
                console.log("Error: " + error)
            });
        }
    }

    return (
        <div className="Home">
            <div className="Header">
                Phi Tau Music Request
            </div>
            <div className="Credits">
                Created by Rohin Nana
            </div>
            <div className="SongRequest">
                <input className="Request" placeholder="Enter Song" type="text" onChange={ e => setSongRequest(e.target.value) }/>
            </div>
            <div className="ArtistRequest">
                <input className="Request" placeholder="Enter Artist"  type="text" onChange={ e => setArtistRequest(e.target.value) }/>
            </div>
            <div className="ErrorMessage">
                <div className="ErrorMessageText">
                    {errorMessage}
                </div>
            </div>
            <button className="RequestButton" onClick={() => {submitRequest()}}>
                <div className="RequestButtonText">
                    Request
                </div>
            </button>
            <div className="QueueHeading">
                <div className="QueueHeadingText">
                    Queue
                </div>
            </div>
            <div>
                < RequestsList canDelete="no" />
            </div>
        </div>
    );
}

export default Home;