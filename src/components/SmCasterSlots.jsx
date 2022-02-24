import React, { Fragment } from "react";


export default function SmCasterSlots() {


    return (
        <Fragment>
            
            <div className="slots-container">

                <form id="slots-form">
                    <div className="slots">
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>1st</p>
                    </div>

                    <div className="slots"> 
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>2nd</p>
                    </div>

                    <div className="slots"> 
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>2nd</p>
                    </div>

                    <div className="slots"> 
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>3rd</p>
                    </div>

                    <div className="slots"> 
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>4th</p>
                    </div>

                    <div className="slots"> 
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <p>5th</p>
                    </div>

                </form> 
                
            </div>
        </Fragment>
    )
}