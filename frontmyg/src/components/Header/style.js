'use client';
import styled from "styled-components";

// Contenedores

export const HeaderContenedor = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: '__Poppins_c1ca03';


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
    color: #888;
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
    background: #ccc;
    font-size: 15px;
    font-weight: 600;
    color: #666;
    transition: color .2s;
    margin: 0 0 0 20px;
    border-radius: 20px;
    border: 2px solid #F9F9F9;
    outline: 3px solid #FA7A8F;
    letter-spacing: 2px;
    &:hover{
        color: #FA7A8F;
    }
`;

export const LoginButton = styled.button`
    background: #F24162;
    width: 170px;
    height: 35px;
    font-size: 17px;
    font-weight: 500;
    border-radius: 5px;
    border: none;
    color: #fff;
    box-shadow: 0 0 20px 0px #00000022;
    transition: background .3s;
    cursor: pointer;

    &:hover{
        background: #FA7A8F;
    }
`;

export const Sidebar = styled.div`
    height: 100vh;
    background: #DF1F4D;
    width: 0px;
    position: absolute;
    right: 0;
    z-index: 1000;
    transition: width .5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 40px 0;
    border-radius: 20px 0 0 20px;
`;

export const ButtonSidebar = styled.button`
    background: #F24162;
    color: #fff;
    cursor: pointer;
    border: none;
    width: 80%;
    height: 60px;
    font-size: 18px;
    text-align: start;
    padding: 0 0 0 30px;
    border-radius: 10px 0  0 10px;
`;



// imagenes

export const Logo = styled.img`
    height: 80%;

`;