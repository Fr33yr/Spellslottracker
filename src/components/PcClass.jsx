import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export function PcClass() {

   
    return (
        <Fragment>
            
            <div className="class">
                <h1>Spell slot tracker</h1>

                <p>Pick a class</p>

                <Link className="class-btn" to="/Bard">Bard</Link>
                <button className="class-btn">Cleric</button>
                <button className="class-btn">Druid</button>
                <button className="class-btn">Sorcerer</button>
                <button className="class-btn">Wizard</button>
                <button className="class-btn">Artificer</button>
                <button className="class-btn">Paladin</button>
                <button className="class-btn">Ranger</button>
            </div>

            
            
        </Fragment>
    )
}