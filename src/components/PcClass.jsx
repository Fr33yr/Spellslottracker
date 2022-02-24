import React, { Fragment } from "react";
import { Link } from "react-router-dom";


export function PcClass() {

   
    return (
        <Fragment>
            
            <div className="class">
                <h1>Spell slot tracker</h1>

                <p>Pick a class</p>

                <Link className="class-btn" to="/Bard">Bard</Link>
                <Link className="class-btn" to="/Cleric">Cleric</Link>
                <Link className="class-btn" to="/Druid">Druid</Link>
                <Link className="class-btn" to="/Sorcerer">Sorcerer</Link>
                <Link className="class-btn" to="/Wizard">Wizard</Link>
                <Link className="class-btn" to="/Artificer">Artificer</Link>
                <Link className="class-btn" to="/Paladin">Paladin</Link>
                <Link className="class-btn" to="/Ranger">Ranger</Link>
            </div>

            
            
        </Fragment>
    )
}