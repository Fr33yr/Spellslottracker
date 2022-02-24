import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";



export default function Sorcerer() {

    return(
        <Fragment>
            <div className="sorcerer-class">
                <Link to="/">Back</Link>

                <CasterSlots/>
            </div>
        </Fragment>
    );
}