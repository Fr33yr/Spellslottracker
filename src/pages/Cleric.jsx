import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './cleric.css'



export default function Cleric() {

    const mystyle = {
        background: '#ffe042',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="cleric-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Cleric</h1>
                <CasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}