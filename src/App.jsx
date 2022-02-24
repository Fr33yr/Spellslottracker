import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import { PcClass } from "./components/PcClass";
import Bard from "./pages/Bard";

export function App() {

    return (
        <Fragment>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PcClass/>}/>
                    <Route path="/Bard" element={<Bard/>}/>
                </Routes>
            </BrowserRouter>

        </Fragment>
    )
}