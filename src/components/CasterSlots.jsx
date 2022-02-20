import React, { Fragment, Component } from "react";


class CasterSlots extends Component {
    
    
   render() {
       return (
        <Fragment>
            <button>Back</button>
            <div className="slots-container">
                <form action="">
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <input type="checkbox" />
                    <p>1ST</p>
                </form> 
                
            </div>
            <button>Rest</button>
        </Fragment>
       )
   }
}

export default CasterSlots;