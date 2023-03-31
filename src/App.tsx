import React from 'react';
import './App.css';
import NavBar from "./component/NavBar/NavBar";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import {Route, Routes} from "react-router";
import HomePage from "./component/HomePage/HomePage";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <ErrorBoundary>
                <ScrollToTop>
                    <Routes>
                        <Route path='/'
                               element={<HomePage/>}/>
                    </Routes>
                </ScrollToTop>
            </ErrorBoundary>
        </div>
    );
}

export default App;
