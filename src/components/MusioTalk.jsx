import React from 'react'
import styled from 'styled-components'
import MusioTalkImage1 from '../assets/MusioTalkImg1.png'
import MusioTalkImage2 from '../assets/MusioTalkImg2.svg'
import ArrowVector from '../assets/arrowVector.svg'
import { Link } from 'react-router-dom'



export const MusioTalk = () => {
    return (
        <MUSIOTALK_STY>
            <img src={MusioTalkImage1} className='mainImage' alt="Musio Talk" />

            <div className="text-side">
                <img className='topImage' src={MusioTalkImage2} width='145px' height='48px' alt="" />
                <p className="top-text">MUSE API로 협력한 프로젝트</p>
                <p className="title">MUSIO TALK</p>
                <p className='content'>VENA TALK is a learning app that enables free talking VENA TALK is a learning app that enables free talking VENA TALK is a learning app that enables free talking </p>
                <ul className='listElements'>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                <Link className='link' to="/oxford"><p>Learn More</p>  <img src={ArrowVector} width='16px' height='16px' alt="" /></Link>
            </div>
        </MUSIOTALK_STY>
    )
}


const MUSIOTALK_STY = styled.div`
    display: flex;
    column-gap: 58px;
    align-items: flex-start;
    .mainImage
    {
        width: 488px;
        height: 344px;
    }
    .text-side {
        width: 600px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .top-text
        {
            margin-top: 15px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            display: flex;
            align-items: center;
            color: #28292B;
            margin-bottom: 0px;
        }
        .title{
            margin-top: 15px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 48px;
            color: #28292B;
            margin-bottom: 0px;

        }
        .content{
            margin-top: 18px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            color: #494B52;
            margin-bottom: 0px;

        }
        .listElements{
            margin-top: 15px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 24px;
            color: #494B52;
            padding-left: 20px;
            li{
                font-family: Noto Sans CJK KR;
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 24px;
            }
        }
        .link {
            display: flex;
            column-gap: 16px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 24px;
            color: #F37021;
            align-items:center ;
            p {
                padding: 0px;
                margin: 0px;
                font-family: Noto Sans CJK KR;
                font-style: normal;
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
            }
        }
    }
    
`