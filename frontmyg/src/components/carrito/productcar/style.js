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
    background: yellow;
    width: 30%;

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

export const Pedido = styled.form`
    background: #fff;
    width: 98%;
    height: 100px;
    margin: 0 0 20px 0 ;
    border-radius: 20px;
    filter: drop-shadow(0 0 6px #00000055);
    z-index: 2000;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`;

export const ContentTittles = styled.div`
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Img = styled.div`
    background: #D9D9D9;
    width: 70px;
    height: 70px;
    border-radius: 5px;
`;

// 

export const Titulo = styled.p`
      font-size: 20px;
      font-weight: 600;
      color: #222;
`;

// 


export const EliminarProducto = styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      width: 40px;
      height: 40px;
      font-size: 25px;
      font-weight: 900;
      color: #DF1F4D;
      cursor: pointer;
`;