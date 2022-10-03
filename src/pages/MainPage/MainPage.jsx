import React, { useState } from 'react';
import Auth from '../../components/Auth/Auth';
import Login from '../../components/Login/Login';
import io from 'socket.io-client';
import Carousel from '../../components/Carousel/Carousel'
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
const socket = io.connect("http://localhost:3030");

const MainPage = () => {

    const [activeAuth, setActiveAuth] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);

    return (
        <>
            <button onClick={() => setActiveAuth(true)}>Create my account</button>
            <button onClick={() => setActiveLogin(true)}>Sign in</button>
            <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
            <Carousel/>
            <Main/>
            <Footer/>
        </>
    );
};

export default MainPage;