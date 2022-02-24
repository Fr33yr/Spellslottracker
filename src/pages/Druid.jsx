import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import CasterSlots from "../components/CasterSlots";



export default function Druid() {

    return(
        <Fragment>
            <div className="druid-class">
                <Link to="/">Back</Link>

                <CasterSlots/>
            </div>
        </Fragment>
    );
}