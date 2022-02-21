import React, { Fragment, useState, useRef, useEffect } from "react";
//import { uuid } from 'uuidv4';

import './App.css'
import { PcClass } from "./components/PcClass";

export function App() {

    return (
        <Fragment>
            <h1>Class</h1>
            <PcClass/>
        </Fragment>
    )
}