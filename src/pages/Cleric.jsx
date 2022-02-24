import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";



export default function Cleric() {

    return(
        <Fragment>
            <div className="cleric-class">
                <Link to="/">Back</Link>

                <CasterSlots/>
            </div>
        </Fragment>
    );
}