import React, { useContext } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo2formusioletsgo.png'
import { useScrollPosition, useScrollXPosition, useScrollYPosition } from 'react-use-scroll-position';
import { LanguageContext } from '../context/LanguageContext';

export const Topbar2 = () => {
    const {language , changeLanguage} = useContext(LanguageContext);

    const scrollY = useScrollYPosition();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <>
        <Topbar2_STY scrollY={scrollY}>
            <div className='nav'>
                <img src={logo} width='60px' height='60px' alt="" />
                <select value={language} name="lang" id="selectLang" onChange={(e) =>  changeLanguage(e.target.value)}>
                    <option value="KR">Korean</option>
                    <option value="CH">Chinese</option>
                    <option value="EN">English</option>
                    <option value="ID">Indonesia</option>
                </select>
            </div>
        </Topbar2_STY>

        <SCROLL_TO_TOP onClick={scrollToTop} scrollY={scrollY}>
             <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/></svg>
        </SCROLL_TO_TOP>
        </>
    )
}

const Topbar2_STY = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding:10px 188px;
    position: sticky;
    top: 0px;
    background-color    : white;
    transition: 0.5s;
    box-shadow: ${props => props.scrollY > 0 ? '0px 0px 10px rgba(0,0,0,0.1)' : 'none'};
    select {
        border: none;
        background-color: transparent;
    }
    .nav{
        width: 1080px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    @media screen and (max-width: 1080px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

const SCROLL_TO_TOP = styled.button`
    width: 44px;
    height: 44px;
    background-color: #21D5CB;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
    opacity: ${props => props.scrollY > 0 ? '1' : '0'};
    transform: ${props => props.scrollY > 0 ? 'translateY(0px)' : 'translateY(100px)'};
    transition: 0.5s;
    svg {

        font-size: 20px;
        color: white;
        fill: white;
    }
`