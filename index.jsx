import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./src/styles/_reset.scss";

import App from "./src/App";
import { Error404 } from "./src/Errors";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("app")
);
