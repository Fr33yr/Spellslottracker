import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './bard.css'



export default function Bard() {

    const mystyle = {
    background: '#8F00FF',
    border: 'none',
    borderRadius: '5px 5px'
    }

    const reset = () => {
        document.getElementById("slots-form").reset();
    }

    return(
        <Fragment>
            <div className="bard-class">
                <Link className="back-btn" to="/">Back</Link>
                <h1>Bard</h1>
                <CasterSlots />
                <button style={mystyle} className="rest-btn" type="reset" onClick={reset}>Rest</button>
            </div>
        </Fragment>
    );
}