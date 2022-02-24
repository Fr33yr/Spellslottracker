import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

import { PcClass } from "./components/PcClass";
import Artificer from "./pages/Artificer";
import Bard from "./pages/Bard";
import Cleric from "./pages/Cleric";
import Druid from "./pages/Druid";
import Paladin from "./pages/Paladin";
import Ranger from "./pages/Ranger";
import Sorcerer from "./pages/Sorcerer";
import Wizard from "./pages/Wizard";

export function App() {

    return (
        <Fragment>
            
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PcClass/>}/>
                    <Route path="/Bard" element={<Bard/>}/>
                    <Route path="/Cleric" element={<Cleric/>}/>
                    <Route path="/Druid" element={<Druid/>}/>
                    <Route path="/Sorcerer" element={<Sorcerer/>}/>
                    <Route path="/Wizard" element={<Wizard/>}/>
                    <Route path="/Artificer" element={<Artificer/>}/>
                    <Route path="/Paladin" element={<Paladin/>}/>
                    <Route path="/Ranger" element={<Ranger/>}/>
                </Routes>
            </BrowserRouter>

        </Fragment>
    )
}