import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './paladin.css'


export default function Paladin() {

    const mystyle = {
        background: '#ffec42',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="paladin-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Paladin</h1>
                <SmCasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}