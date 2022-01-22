import React, { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./src/styles/_reset.scss";

import App from "./src/App";
import { Error404 } from "./src/Errors";

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
