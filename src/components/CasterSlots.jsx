import React, { Fragment, useState } from "react";


export default function CasterSlots() {

    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    }


    return (
        <Fragment>
            <button>Back</button>
            <div className="slots-container">

                <form action="">
                    <input type="checkbox" checked={isChecked} onChange={handleOnChange}/>
                    <p>1ST</p>
                </form> 
                
            </div>
            <button onClick={handleOnChange}>Rest</button>
        </Fragment>
    )
}