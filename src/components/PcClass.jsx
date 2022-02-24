import React, { Fragment } from "react";

export function PcClass() {

   
    return (
        <Fragment>
            
            <div className="class">
                <h1>Spell slot tracker</h1>

                <p>Pick a class</p>

                <button className="class-btn">Bard</button>
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