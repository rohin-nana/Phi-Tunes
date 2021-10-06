import './Submitted.css';

function Submitted() {

    return (
    <div className="Submitted">
        <div className="SubmittedMessage">
            Your request has been queued
        </div>
        <button className="GoHomeButton" onClick={(e) => {
        e.preventDefault();
        window.location.href='http://localhost:3000/home';
        }}>
            <div className="GoHomeButtonText">
                Continue
            </div>
        </button>
    </div>
    );
}

export default Submitted;