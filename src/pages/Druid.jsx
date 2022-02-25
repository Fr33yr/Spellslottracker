import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './druid.css'



export default function Druid() {

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
            <div className="druid-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Druid</h1>
                <CasterSlots/>
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}