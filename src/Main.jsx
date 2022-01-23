import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/_reset.scss";

import App from "./App";
import { Error404 } from "./Errors";

const currentLocation = window.location.pathname;
const currentPath =
    currentLocation.substring(0, currentLocation.lastIndexOf("/")) + "/";

render(
    <StrictMode>
        <BrowserRouter basename={currentPath}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
    document.getElementById("app")
);
