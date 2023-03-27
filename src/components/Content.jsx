import React from "react";
import styled from "styled-components";


const ContentImg = styled.div`
    background-image: url("back.jpg");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 45vh;
    width: 70%;
    display: flex;
    justify-content: satrt;
    align-items: center;
`;

const ContentContainer = styled.div`
    background-color: #060419;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentMainText = styled.div`
    margin-left: 5rem;
    color: white;
    font-size: 3rem;
    font-weight: 700;
`;

const ContentText = styled.div`
    margin-left: 5rem;
    color: white;
    font-size: 2rem;
    font-weight: 400;
`;


const Content = () => {
    return (
        <ContentContainer>
            <ContentImg>
                <ContentMainText>CailcoFox</ContentMainText>
                <ContentText>AI 노래 음성 합성 기술을 <br /> 웹에서 쉽게 이용할 수 있도록 만드는 것을 목표로 합니다.</ContentText>
            </ContentImg>
        </ContentContainer>
        
    );
} 

export default Content;