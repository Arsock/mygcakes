'use client';
import styled from "styled-components";

export const ContenerMainCarrito = styled.div`
    display: flex;
    height: 80vh;

`;

export const ProductCarrito = styled.div`
    width: 70%;

`;

export const TotalCarrito = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items:center;

`;
export const AllPedido = styled.div`
    width: 92%;
    height: 80%;
    overflow: auto;
    padding: 10px;

    &::-webkit-scrollbar-thumb {
        background-color: #DF1F4D;
        border-radius: 10px;
      }
    &::-webkit-scrollbar {
        width: 6px;
      }

`;

// 

export const ResumenContener = styled.div`
      width: 100%;
      height: 250px;
      background: #fff;

      border-radius: 20px;
      filter: drop-shadow(0 0 6px #00000055);
      padding: 0 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px;
`;

export const TotalPrice = styled.div`
      font-size: 25px;
      font-weight: 500;
      color: #656565;

`;


export const Continue = styled.button`
    width: 100%;
    height: 60px;

    border-radius: 10px;
    border: none;

      font-size: 18px;
      font-weight: 500;
      background: #FA7A8F;
      color: #fff;
      cursor: pointer;
`;
