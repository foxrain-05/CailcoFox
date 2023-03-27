import React from "react";
import styled from "styled-components";


// footer 하단 고정
const Content = styled.footer`
    background-color: rgb(80, 80, 80);
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    
`;

const Footer = () => {
    return (
        <Content className="footer">
            <p>© 2023 CailcoFox</p>
        </Content>
    );
}

export default Footer;