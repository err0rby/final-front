import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Auth from '../Auth/Auth';
import  styled from '../Header/header.module.css'
import Login from '../Login/Login';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Header = React.memo(() => {

    const navigate = useNavigate()
    const token = useSelector((state) => state.application.token)
    const [activeAuth, setActiveAuth] = useState(false);
    const [activeLogin, setActiveLogin] = useState(false);
    const id = useSelector((state) => state.application.id)
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
        window.location.href = "/"
    }

    
    return (
        <>
        <div className={styled.head}>
        <div>
            <div className={styled.navImg}><img className={styled.img} src='https://lyonturnbull.blob.core.windows.net/site-images/LT_Logo.png' alt="" /></div>
        </div>
        <div className={styled.mainDrop}>
            <ul className={styled.dropMenu}>
                AUCTIONS
                <div className={styled.dropContent}>
                <div onClick={()=> {navigate('/')}}>Lyon & Turnbull </div>
                <div onClick={()=>{window.scrollTo(0, 1200)}}>Selling at Auction</div>
                <div onClick={()=>{window.scrollTo(0, 1200)}}>Buying at Auction</div>
                <div >Specialist Directory</div>
                <div onClick={() => {navigate('/products')}}>Forthcoming Auctions</div>
                </div>
            </ul>
            <ul className={styled.dropMenu}>
                DEPARTMENTS
                <div className={styled.dropContent}>
                <div onClick={() => {navigate('/alphabet')}}>View all Departments</div>
                <div>Special Directory</div>
                <div>Private Art Collections</div>
                <div>Corporate Art Collection</div>
                </div>
            </ul>
            <ul className={styled.dropMenu}>
                SERVICES
                <div className={styled.dropContent}>
                <div>Valuation Services</div>
                <div>Request an Auction Estimate</div>
                <div>Private and Corporate Art Collections</div>
                <div>Private Sales</div>
                <div>Events and Partnerships</div>
                </div>
            </ul>
            <ul className={styled.dropMenu}>
                DISCOVER
                <div className={styled.dropContent}>
                <div onClick={()=> {navigate('/about')}}>About</div>
                <div>Our</div>
                <div>Locations</div>
                <div>Events Calendar</div>
                <div>Publications</div>
                </div>
            </ul>
            <ul className={styled.dropMenu}>
                {token ? 
                <>
                {id == "63441d5acc170ad61fe4de99" ?    <>
                ADMIN ACCOUNT
                <div className={styled.dropContent}>
                <div ><a href="http://localhost:3030/admin">Admin Account</a></div>
                <div onClick={() => handleLogOut()} > Log Out</div>
                </div>
                </> :    <>
                PERSONAL ACCOUNT
                <div className={styled.dropContent}>
                <div onClick={() => {navigate('/profile')}} >Personal Account</div>
                <div onClick={() => handleLogOut()} > Log Out</div>
                </div>
                </> }
             
                </>
                : 
                <>
                SIGN IN/REGISTER
                <div className={styled.dropContent}>
                <div onClick={() => {setActiveLogin(true)}} > Sign In</div>
                <div onClick={() => {setActiveAuth(true)}} > Register</div>
                </div>
                </>
                }
            </ul>
        </div>
        </div>
    <Auth activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
    <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
        </>
    );
});

export default Header;