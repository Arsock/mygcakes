'use client';
import styled from "styled-components";

export const ContenerProduct = styled.div`
    background: #fff;

    width: 290px;
    height: 350px;

    border-radius: 20px;
    padding: 30px;

    box-shadow: 0 0 20px 0px #00000022;
    cursor: pointer;
`;

// TEXTO

export const TitleProduct = styled.h1`
    font-size: 1.3rem;
`;

export const CategoryProduct = styled.h2`
    font-size: 0.9rem;
    color: #888;
    font-weight: 600;
`;

// IMAGEN

export const ImageProduct = styled.div`
    width: 100%;
    height: 60%;
    background: #D9D9D9;
    border-radius: 20px;
    margin: 18px 0;
`;

export const ImageStar = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 5px 0 0; 
    color: red;
    cursor: pointer;
    filter: invert(97%) sepia(0%) saturate(1%) hue-rotate(181deg) brightness(88%) contrast(99%);

    transition: filter .3s;

    &:hover{
        
    }
`;


export const StarProduct = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
`;

export const AddProduct = styled.button`
    width: 30px;
    height: 30px;

    color: #9A9A9A;

    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 200;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    top: -2px;
    
    &:hover{
        color: #FA7A8F;
    }
`;

