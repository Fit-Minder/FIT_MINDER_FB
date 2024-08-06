import React, {useEffect} from "react";



function First() {
    return (
        <div className="Container">
            <div className="MainLogo">
                <h1>내 몸에 딱 맞는<br/>간단 스트레칭 서비스</h1>
                <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="" />
            </div>
            <div className="Main">
                <div className="MainText">
                    <p>3초만에 시작하기</p>
                    <img src={`${process.env.PUBLIC_URL}/locket.svg`} alt="" />
                </div>
                <div className="MainLogin">
                    <a href=""><img src={`${process.env.PUBLIC_URL}/kakaotalk.png`} alt="" /></a>
                    <a href=""><img src={`${process.env.PUBLIC_URL}/google.png`} alt="" /></a>
                    <a href=""><img src={`${process.env.PUBLIC_URL}/naver.svg`} alt="" /></a>
                </div>
            </div>
        </div>
    )}

export default First;