import React from "react";
import styled from "styled-components";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>로그인 페이지</p>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <button>로그인</button>
        </div>
    );

}