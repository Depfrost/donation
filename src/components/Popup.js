import { useState } from "react";
import Paypal from "./Paypal";

function Popup() {
    const [donating, setDonating] = useState(false);

    if (donating) {
        return (
            <div style={popupStyle}>
                <Paypal />
            </div>
        );
    } else {
        return(
            <div style={containerStyle} onClick={() => setDonating(true)}>
                <img src="https://img.icons8.com/cotton/2x/like.png"
                    onClick={() => setDonating(true)} alt=""/>
                <h2 style={textStyle}>Donate</h2>
            </div>
        );
    }
}

const popupStyle = {
    padding:"40px",
    backgroundColor: "white",
    borderRadius: "25px",
    filter: "drop-shadow(0 0 30px #333)",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "3px solid grey",
    maxHeight: "100vh",
}

const containerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
}

const textStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    color: "rgb(68, 75, 85)",
    pointerEvents: "none",
    transform: "translate(-50%, -90%)",
}

export default Popup;
