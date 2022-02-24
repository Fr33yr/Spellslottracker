import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './Artificer.css'


export default function Paladin() {

    return(
        <Fragment>
            <div className="paladin-class">
                <Link to="/">Back</Link>

                <SmCasterSlots/>
            </div>
        </Fragment>
    );
}