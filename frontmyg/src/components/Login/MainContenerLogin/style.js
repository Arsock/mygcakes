'use client';
import a from "./fondo.svg"
import styled from "styled-components";

export const ContenerPageLogin = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    right: 60px;
    width: 100vw;
    height: 550.5px;
    gap: 15px;
    padding: 20px 0 0 0;
`;


export const LoginContener = styled.form`
    background: #fff;
    margin: 10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;


    width: 350px;
    height: 300px;

    border-radius: 20px;
    padding: 30px 45px;

    gap: 30px;

    box-shadow: 0 0 20px 0px #00000022;
`;

export const TitleLogin = styled.h1`
    color: #FA7A8F;
    font-size: 25px;
    text-align: center;
`;

export const SubTitleLogin = styled.span`
    display: inline-block;
    color: #B3B3B3;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
`;

export const RegisterFooter = styled.span`
    display: inline-block;
    color: #878787;
    font-size: 15px;
    text-align: center;
    font-weight: 400;
`;

export const LoginFooter = styled.span`
    display: inline-block;
    color: #878787;
    font-size: 13px;
    text-align: center;
    font-weight: 400;
`;


// 
export const LoginInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 2px solid #aaa;
    height: 35px;
    font-size: 15px;
    text-indent: 10px;
    outline: none;
    transition: border-bottom .3s;

    &:focus, &:hover{
        border-bottom: 2px solid #FA7A8F;
    }
`;

export const LoginButton = styled.input`
    width: 100%;
    border: none;
    background: #F24162;
    height: 35px;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    transition: background .3s;

    &:hover{
        background: #FA7A8F;
    }
`;



export const RegisterFooterButton = styled.button`
    color: #FA7A8F;
    border: none;
    font-size: 15px;
    font-weight: 600;
    background: #F9F9F9;
    cursor: pointer;
`;

export const LoginFooterButton = styled.button`
    color: #FA7A8F;
    border: none;
    font-size: 13px;
    font-weight: 600;
    background: #fff;
    cursor: pointer;
`;




export const ImageBackLogin = styled.img`
    position: absolute;
    top: 47.2%;
    width: 100%;
    z-index: -1;
    
`;