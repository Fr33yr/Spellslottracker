import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './Artificer.css'


export default function Artificer() {

    return(
        <Fragment>
            <div className="artificer-class">
                <Link to="/">Back</Link>

                <SmCasterSlots/>
            </div>
        </Fragment>
    );
}