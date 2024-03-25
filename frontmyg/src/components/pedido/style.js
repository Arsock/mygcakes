'use client';
import styled from "styled-components";


// 
export const MetodoContener = styled.div`
      width: 100%;
      height: 370px;
      display: flex;
      flex-direction: column;
      align-items: center;

`;

export const ButtonSelected = styled.button`
      width: 250px;
      height: 250px;
      border-radius: 20px;
      border: none;
      background: #fff;
      box-shadow: 0 0 20px 0px #00000022;
      outline: 2px solid #fff;
      transition: outline .4s;
      cursor: pointer;

      &:hover{
            outline: 2px solid #FA7A8F;
      }
`;

// 
export const EnvioContener = styled.form`
    background: #fff;
    margin: 10px 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;


    width: 350px;
    height: 250px;

    border-radius: 20px;
    padding: 30px 45px;

    gap: 30px;

    box-shadow: 0 0 20px 0px #00000022;
`;

export const ButtonContinue = styled.button`
      background: #FA7A8F;
      color: #fff;
      width: 300px;
      height: 50px;
      border-radius: 10px;
      font-size: 15px;
      border: none;
      margin: 20px 0 0 0;
      font-weight: 500;
`;

export const EnviarInput = styled.input`
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