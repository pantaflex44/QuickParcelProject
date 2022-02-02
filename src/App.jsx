import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import * as styles from "./css/App.module.scss";
import "./css/transitions.css";

import MainMenu from "./components/MainMenu";
import Index from "./pages/Index";
import About from "./pages/About";

const TransitionWrapper = () => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                classNames="pageTransition"
                timeout={250}
            >
                <Routes>
                    <Route exact path="/" element={<Index />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default function App() {
    const currentLocation = window.location.pathname;
    const currentPath =
        currentLocation.substring(0, currentLocation.lastIndexOf("/")) + "/";

    return (
        <HelmetProvider>
            <BrowserRouter basename={currentPath}>
                <MainMenu />
                <TransitionWrapper />
            </BrowserRouter>
        </HelmetProvider>
    );
}

render(<App />, document.getElementById("app"));
