import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./css/_app.scss";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";

export default function App() {
    const currentLocation = window.location.pathname;
    const currentPath =
        currentLocation.substring(0, currentLocation.lastIndexOf("/")) + "/";

    return (
        <BrowserRouter basename={currentPath}>
            <HelmetProvider>
                <Layout>
                    <Routes>
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/" element={<Index />} />
                    </Routes>
                </Layout>
            </HelmetProvider>
        </BrowserRouter>
    );
}

const appElement = document.getElementById("app");
if (appElement.hasChildNodes()) {
    hydrate(<App />, appElement);
} else {
    render(<App />, appElement);
}
