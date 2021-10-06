import React, { useEffect, useState } from 'react';
import './RequestsList.css';
import SongDeleteButton from './SongDeleteButton';
import Axios from 'axios';

const RequestsList = (canDelete) => {

    const [requests, setRequests] = useState([]);

    function CreateSongDeleteButton(item) {
        if (canDelete.canDelete==="yes") {
            return (
                <SongDeleteButton song={item.SONG} artist={item.ARTIST} />
            )
        }
    }

    useEffect(()=> {
        Axios.get('http://localhost:3001/songGet').then((response)=> {
            setRequests(response.data);
        });
    }, []);

    return (
        <div className="RequestsList">
            {requests.map((item, i) =>
                <div className="RequestsEntry" key={i}> {item.SONG} by {item.ARTIST} {CreateSongDeleteButton(item)}</div>
            )}
        </div>
    )
}

export default RequestsList;