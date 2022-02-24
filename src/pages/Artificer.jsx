import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './Artificer.css'


export default function Artificer() {

    const mystyle = {
        background: '#14296e9a',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="artificer-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Artificer</h1>
                <SmCasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}