import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";
import './bard.css'



export default function Bard() {

    return(
        <Fragment>
            <div className="bard-class">
                <Link to="/">Back</Link>

                <CasterSlots/>
            </div>
        </Fragment>
    );
}