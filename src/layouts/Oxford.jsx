import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import OxfordTopImage from '../assets/OxfordTopImage.png'
import appleLogo from '../assets/appleLogo.png'
import playStoreLogo from '../assets/playStoreLogo.png'
import heartIcon from '../assets/heartIcon.png'
import likeIcon from '../assets/likeIcon.png'
import sunIcon from '../assets/sunIcon.png'
import OxfordDownImage1 from '../assets/OxforddownImage1.png'
import OxfordDownImage2 from '../assets/OxfordDownImage2.png'
import OxfordDownImage3 from '../assets/OxfordDownImage3.png'
import OxfordFooter from '../assets/OxfordFooter.png'
import storeFrame1 from '../assets/storeFrame1.png'
import storeFrame2 from '../assets/storeFrame2.png'
import { data_for_site } from '../data/language'
import useGeoLocation from "react-ipgeolocation";
import { LanguageContext } from '../context/LanguageContext'

export const Oxford = () => {
    const location  =   useGeoLocation();
    const {language , changeLanguage} = useContext(LanguageContext);
    const [data, setdata] = useState(null)


    useEffect(() => {
        setdata(data_for_site[language])
    }, [language])
    
    useEffect(() => {
        if(location.country){
            console.log(location.country)
            changeLanguage(location.country)
            setdata(data_for_site[location.country])
        }
        console.log(location.country)

        console.log("HELLO")
    }, [location.country])

    

    useEffect(() => {
        window.scrollTo({
            top: 0,
        })
    }, [])
    if(location.country && data){
        return (
            <OXFORD_STY>
                <OXFORD_TOP_STY>
                    <div className="left-side">
                        <h1 className="title">
                            <p className='colorChange'>{data.top.title1}</p>
                            <p>{data.top.title2}</p>
                            <p>{data.top.title3}</p>
                        </h1>
                            
                        <h2 className="subTitle">{data.top.subtitle}</h2>
                        <div className="storeBlock">
                            <button  className="button"><img width='21.11px' height='25px' src={appleLogo} alt="" /> <span>App Store</span></button>
                            <button className="button"><img width='22.39px' height='25px' src={playStoreLogo} alt="" /> <span>Google Play</span></button>
                        </div>
                    </div>
                    <img className='right-side' src={OxfordTopImage} width='532px' height='765px' alt="" />
                </OXFORD_TOP_STY>
    
                <OXFORD_BlUE_BLOCK_STY>
                    <div className="blue-block">
                        <div className="circle"><img width='60px' height='55px'  src={heartIcon} alt="" /></div>
                        <p className="title">{data.blueBlock.block1.title}</p>
                        <p className="subTitle">{data.blueBlock.block1.subtitle}</p>
                    </div>
    
                    <div className="blue-block">
                        <div className="circle"><img width='60px' height='60px' src={likeIcon} alt="" /></div>
                        <p className="title">{data.blueBlock.block2.title}</p>
                        <p className="subTitle">{data.blueBlock.block2.subtitle} </p>
                    </div>
    
                    <div className="blue-block">
                        <div className="circle"><img width='60px' height='60px'  src={sunIcon} alt="" /></div>
                        <p className="title">{data.blueBlock.block3.title}</p>
                        <p className="subTitle">{data.blueBlock.block3.subtitle}</p>
                    </div>
                </OXFORD_BlUE_BLOCK_STY>
    
                <OXFORD_DOWN_BLOCK_STY columnGap="55px">
                    <img src={OxfordDownImage1} alt="" />
                    <OXFORD_DOWN_TEXT_BLOCK_STY>
                        <p className="title">{data.listblocks.block1.title}</p>
                        <ul className="listElements">
                        
                            <li>{data.listblocks.block1.l1}</li>
                            <li> {data.listblocks.block1.l2}</li>
                            <li>{data.listblocks.block1.l3}</li>
                        </ul>
                    </OXFORD_DOWN_TEXT_BLOCK_STY>
                </OXFORD_DOWN_BLOCK_STY>
    
                <OXFORD_DOWN_BLOCK_STY columnGap="0px">
                    <OXFORD_DOWN_TEXT_BLOCK_STY>
                        <p className="title">{data.listblocks.block2.title}</p>
                        <ul className="listElements">
                            <li>{data.listblocks.block2.l1}</li>
                            <li> {data.listblocks.block2.l2}</li>
                        </ul>
                    </OXFORD_DOWN_TEXT_BLOCK_STY>
                    <img src={OxfordDownImage2} alt="" />
                </OXFORD_DOWN_BLOCK_STY>
    
                <OXFORD_DOWN_BLOCK_STY columnGap="55px">
                    <img src={OxfordDownImage3} alt="" />
                    <OXFORD_DOWN_TEXT_BLOCK_STY>
                        <p className="title">{data.listblocks.block3.title}</p>
                        <ul className="listElements">
                            <li>{data.listblocks.block3.l1}</li>
                            <li>{data.listblocks.block3.l2} </li>
                            <li>{data.listblocks.block3.l3}</li>
                        </ul>
                    </OXFORD_DOWN_TEXT_BLOCK_STY>
                </OXFORD_DOWN_BLOCK_STY>
    
    
                <OXFORD_FOOTER_STY>
                    <div className="center-block">
                        <p className="text">{data.footer.title}</p>
                        <div className="link-block">
                            <a href="#" className='link'></a>
                            <a href="#" className='link'></a>
                        </div>
                    </div>
                </OXFORD_FOOTER_STY>
            </OXFORD_STY>
        )
    }else{return <></>}
    
}



const OXFORD_STY = styled.div`
    width: 100%;
    padding: 0px 0px;
    margin: 0px ;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const OXFORD_TOP_STY = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 53px;
    box-sizing: border-box;
    @media screen and (max-width: 670px) {
                margin: 0px;
    }
    @media screen and (max-width: 1080px) {
        padding: 0px 20px ;
    }
    .left-side{
        width: 590px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 108px;
        @media screen and (max-width: 670px) {
                margin: 50px;
        }
        @media screen and (max-width: 1080px) {
            width: auto;
        }

        .colorChange{
                color: #21D5CB;
            }
        .title{
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 64px;
            margin: 0px;
            @media screen and (max-width: 1080px) {
                font-size: 32px;
                /* width: 100%;
                p{
                    text-align: center;
                    width: 100%;
                } */
                
            }
            @media screen and (max-width: 670px) {
                width: 100%;
                p{
                    width: 100%;
                    text-align: center;
                }
            }   
            p
            {
                margin: 0px;
            }
            @media screen and (max-width: 670px) {
                margin: 0px;
            }
        }

        .subTitle{
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 32px;
            line-height: 40px;
            color: #494B52;
            margin: 0px;
            margin-top: 48px;
            @media screen and (max-width: 1080px) {
                font-size: 18px;
                text-align: center;
                line-height: 20px;

                /* width: 100%;
                p{
                    text-align: center;
                    width: 100%;
                } */
                
            }
            @media screen and (max-width: 670px) {
                margin: 0px;
            }
        }
        .storeBlock{
            display: flex;
            column-gap: 16px;
            margin-top: 48px;
            @media screen and (max-width: 670px) {
                margin-top: 0px;
                width: 100%;
                justify-content: center;
            } 
            &:nth-child(1)
            {
            }
            &:nth-child(2)
            {
            }
            .button{
                width: 156px;
                height: 54px;
                border-radius: 5px;
                border: none;
                background: #28292B;
                display: flex;
                justify-content: center;
                align-items: center;
                column-gap: 12.5px;
                span {
                    color: #FFFFFF;
                    font-size: 17px;
                    font-weight: 650;
                }
                @media screen and (max-width: 670px) {
                    width: 104px;
                    height: 38px;
                    column-gap: 5px;
                    margin-top: 10px;
                    span {
                        font-size: 10px;
                    }
                    img {
                        width: 15px;
                        height: auto;
                    }
                }   
            }
        }
    }

    .right-side{
        @media screen and (max-width: 1080px) {
            width: 329px;
            height: auto;
        }
    }
`


const OXFORD_BlUE_BLOCK_STY = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 58px;
    flex-wrap: wrap;
    row-gap: 50px;
    box-sizing: border-box;
    padding: 111px 188px ;
    @media screen and (max-width: 670px) {
        padding: 50px 10px;
    } 
    background: #21D5CB;
    .blue-block{
        display: flex;
        flex-direction: column;
        width: 321px;
        align-items: center;
        @media screen and (max-width: 670px) {
            width: 90%;
        } 
        .circle{
            width: 130px;
            height: 130px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
        }    
        .title{
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            color: #494B52;
            margin: 0px;
            margin-top: 36px;
        }
        .subTitle{
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            text-align: center;
            color: #494B52;
            margin: 0px;
            margin-top: 24px;
        }
    }
`


const OXFORD_DOWN_BLOCK_STY = styled.div`
    width: 1080px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 120px;
    justify-content: center;
    column-gap: ${props => props.columnGap ? props.columnGap : '0px'};
    @media screen and (max-width: 1080px) {
        width: 100%;
    }
    @media screen and (max-width: 670px) {
        img {
            width: 100%;
            height: auto;
        }
    }
`


const OXFORD_DOWN_TEXT_BLOCK_STY = styled.div`
    width: 540px;
    margin-top: 120px;
    @media screen and (max-width: 670px) {
            width: 90%;
    }
    .title{
            margin-top: 15px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 48px;
            color: #494B52;
            margin-bottom: 0px;

    }
    .listElements{
            margin-top: 15px;
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            color: #494B52;
            padding-left: 25px;

            li{
                font-family: Noto Sans CJK KR;
                font-style: normal;
                font-weight: normal;
                font-size: 24px;
                line-height: 160%;
                color: #494B52;
                flex: none;
                order: 1;
                flex-grow: 0;
            }
        }

`

const OXFORD_DOWN_TEXT2_BLOCK_STY = styled.div`
    width: 482px;
    margin-top: 120px;
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
`









const OXFORD_FOOTER_STY = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background-image: url(${OxfordFooter}); 
    margin-top: 120px;
    .center-block{
        display: flex;
        flex-direction: column;
        row-gap: 48px;
        align-items: center;
        .text{
            font-family: Noto Sans CJK KR;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            color: #494B52;
            margin: 0px;
        }
        a{
            &:nth-child(1)
            {
                background-image: url(${storeFrame1}); 
            }
            &:nth-child(2)
            {
                background-image: url(${storeFrame2}); 
            }
        }
        .link-block{
            display: flex;
            column-gap: 16px;
            .link{
                width: 156px;
                height: 54px;
            }
        }
    }
`