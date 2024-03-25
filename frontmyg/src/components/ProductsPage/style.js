'use client';
import styled from "styled-components";

// Contenedores

export const ContenerPageProducts = styled.div`
    display: flex;
    // background: red;
    font-family: '__Poppins_c1ca03';


    height: 84.6vh;
`;


export const Products = styled.div`
    padding: 0 30px;
    z-index: 200;
    height: 100%;
    width: 80%;
    overflow: auto;
    &::-webkit-scrollbar-thumb {
        background-color: #DF1F4D;
        border-radius: 10px;
      }
    &::-webkit-scrollbar {
        width: 6px;
        display: none;
      }
    
`;

export const ProductsContener = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;

    height: 91.3%;
    width: 100%;

`;


export const Aside = styled.div`
    // background: yellow;

    height: 80px;
    width: 20%;
    display:flex;
    flex-direction: column;
`;

// 

export const TittlePageProducts = styled.h1`
    font-size: 25px;
    color: #FA7A8F;
    margin: 20px 0
`;

export const CategoryP = styled.span`
    font-size: 17px;
    color: #545454;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        color: #FA7A8F;
        font-weight: 600;
    }
    
`;