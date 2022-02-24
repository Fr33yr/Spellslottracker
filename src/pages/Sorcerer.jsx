import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './Sorcerer.css'



export default function Sorcerer() {

    const mystyle = {
        background: '#ff9100',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="sorcerer-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Srocerer</h1>
                <CasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}