import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './wizard.css'



export default function Wizard() {

    const mystyle = {
        background: '#2f00ff93',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="wizard-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Wizard</h1>
                <CasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}