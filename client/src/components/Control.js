import './Control.css';
import RequestsList from './RequestsList';

function Control() {
  return (
    <div className="ControlSongs">
      <div className="DeleteSongsHeader">
        Songs Control 
      </div>
      <RequestsList canDelete="yes"/>
    </div>
  );
}

export default Control;