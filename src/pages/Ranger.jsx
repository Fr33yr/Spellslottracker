import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import SmCasterSlots from "../components/SmCasterSlots";
import './Artificer.css'


export default function Ranger() {

    return(
        <Fragment>
            <div className="ranger-class">
                <Link to="/">Back</Link>

                <SmCasterSlots/>
            </div>
        </Fragment>
    );
}