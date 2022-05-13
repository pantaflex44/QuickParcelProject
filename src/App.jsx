import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./css/_app.scss";

import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";

export default function App() {
    const currentLocation = window.location.pathname;
    const currentPath = currentLocation.substring(0, currentLocation.lastIndexOf("/")) + "/";

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

const rootElement = document.getElementById("app");
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <App />);
} else {
    const root = createRoot(rootElement);
    root.render(<App />);
}
