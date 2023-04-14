import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import PageRouter from "./router/pageRouter";

const App = () => {
    return (
        <div className="container mt-4">
            <Navbar />
            <PageRouter />
        </div>
    );
};

export default App;
