import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './ranger.css'


export default function Ranger() {

    const mystyle = {
        background: 'rgba(0, 131, 0, 0.507)',
        border: 'none',
        borderRadius: '5px 5px'
    }
    
    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="ranger-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Ranger</h1>
                <SmCasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}