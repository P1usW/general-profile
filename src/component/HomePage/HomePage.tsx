import React from 'react';
import TransitionComponent from "../TransitionComponent/TransitionComponent";

import '../../style/_home-page.scss'
import '../../style/_background.scss'
import TransitionContainer from "../TransitionComponent/TransitionContainer";

const HomePage = () => {
    return (
        <div className='home_page'>
            <TransitionContainer className='home_page__container'>
                <TransitionComponent className='background-title' speed={2}>
                    <h1>Welcome, dear guest</h1>
                    <p>This is our future profile and a platform for fantasies</p>
                </TransitionComponent>
                <TransitionComponent className='background-base' speed={2}></TransitionComponent>
                <TransitionComponent className='background-middle' speed={3}></TransitionComponent>
                <TransitionComponent className='background-front' speed={5}></TransitionComponent>
            </TransitionContainer>
        </div>
    );
};

export default HomePage;