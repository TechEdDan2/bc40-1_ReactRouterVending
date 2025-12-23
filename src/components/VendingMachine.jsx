import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Soda from "./Soda.jsx";
import Chips from "./Chips.jsx";
import Candy from "./Candy.jsx";
import Snacks from "./Snacks.jsx";

const VendingMachine = () => {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<h2>Welcome to the Vending Machine!</h2>} />
                    <Route path="/soda" element={<Soda />} />
                    <Route path="/chips" element={<Chips />} />
                    <Route path="/candy" element={<Candy />} />
                    <Route path="/snacks/:snackType?" element={<Snacks />} /> //Refactor to clean up code
                </Routes>
            </Router>
        </>
    );
};

export default VendingMachine;