import { useState } from "react";
import './Popup.css';
import Paypal from "./Paypal";

function Popup() {
    const [donating, setDonating] = useState(false);
    const popupStyle = {
        minWidth: "285px",
        minHeight: "300px",
        width: "15%",
        height: "45%",
        backgroundColor: "white",
        borderRadius: "25px",
        filter: "drop-shadow(0 0 30px #333)",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "3px solid grey",
    }

    if (donating) {
        return (
            <div style={popupStyle}>
                <Paypal />
            </div>
        );
    } else {
        return(
            <div style={popupStyle}>
                <div className="container" onClick={() => setDonating(true)}>
                    <img className="centered" src="https://img.icons8.com/cotton/2x/like.png"
                        onClick={() => setDonating(true)} alt=""/>
                    <h2 className="centered text">Donate</h2>
                </div>
            </div>
        );
    }
}

export default Popup;
