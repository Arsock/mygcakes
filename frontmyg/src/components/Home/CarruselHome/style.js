'use client';
import styled from "styled-components";

// Contenedores

export const CarruselContener = styled.div`
    // background: red;
    height: 80vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Banner = styled.div`
    background: #D9D9D9;
    height: 70%;
    width: 60%;
    border-radius: 20px;
    margin: 20px 0 ;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.11);
`;

export const ButtonsContener = styled.div`
    width: 60%;

    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: center;
`;

// TEXTO
export const TituloBanner = styled.h1`
    color: #FA7A8F;
`;

// BOTONES

export const ButtonBanner = styled.button`
    background: #D9D9D9;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    border: none;
    box-shadow: 0 4px 11px #0000006b;

    cursor: pointer;

    transition: background .3s;

    &:hover{
        background: #DF1F4D;
    }
`;