'use client';
import styled from "styled-components";

// Contenedores

export const HeaderContenedor = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: '__Poppins_c1ca03';

    padding: 0 60px;

    height: 100px;
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const LogoContener = styled.div`
    width:20%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const UserOptions = styled.div`
    width:20%;
    height: 100%;

    display: flex;
    justify-content: end;
    align-items: center;
    
`;


// Botones
export const ButtonNavbar = styled.button`
    height: 80%;
    padding: 10px;
    border: none;
    background: #F9F9F9;
    font-size: 17px;
    font-weight: 600;
    color: #fca5b2;
    transition: color .2s;
    cursor: pointer;
    

    &:hover{
        color: #FA7A8F;
    }
`;

export const ButtonUserOption = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 50px;
    padding: 15px;
    border: none;
    background: #D9D9D9;
    font-size: 15px;
    font-weight: 600;
    color: #666666;
    transition: color .2s;
    margin: 0 0 0 20px;
    border-radius: 20px;
    border: 2px solid #FA7A8F;
    &:hover{
        color: #FA7A8F;
    }
`;

// imagenes

export const Logo = styled.img`
    height: 80%;
`;