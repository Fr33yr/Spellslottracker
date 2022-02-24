import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";



export default function Wizard() {

    return(
        <Fragment>
            <div className="wizard-class">
                <Link to="/">Back</Link>

                <CasterSlots/>
            </div>
        </Fragment>
    );
}