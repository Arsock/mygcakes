'use client';
import styled from "styled-components";

// Contenedores

export const ContenerMainDetalle = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: '__Poppins_c1ca03';


    height: 500px;
`;

export const ContenerSideBar = styled.form`
    height: 100%;
    width: 22%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    filter: drop-shadow(0 0 18px #00000022);
`;

export const ContenerProduct = styled.div`
    height: 100%;
    background: #fff;
    width: 50%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    filter: drop-shadow(0 0 18px #00000022);
`;

export const ContenerComments = styled.div`
    height: 100%;
    background: #fff;
    width: 22%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    filter: drop-shadow(0 0 18px #00000022);
`;
export const CantSet = styled.div`
    display: flex;

`;

export const Imagen = styled.div`
    height: 250px;
    width: 300px;
    background: #D9D9D9;
    border-radius: 10px;
`;

export const Aras = styled.div`
    height: 250px;
    width: 300px;
`;
export const ContentMessage = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
// 

export const MessageForm = styled.form`
    height: 80px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    filter: drop-shadow(0 0 10px #00000022);
`;

export const InputComment = styled.input`
    height: 40px;
    width: 100%;
    font-size: 13px;
    border-radius: 10px;
    border: none;
    outline: none;
    text-indent: 10px;
`;
export const ButtonComment = styled.button`
    height: 30px;
    width: 30px;
    background: #DF1F4D;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin: 5px;
`;


// 

export const TittleConteners = styled.h1`
    font-size: 30px;
    color: #FA7A8F; 
`;

export const DollarPrice = styled.h2`
    font-size: 30px;
    color: #636060;
    font-weight: 600;
`;
export const BsPrice = styled.p`
    color: #727272;
    font-size: 19px;
    font-weight: 500;
`;

export const FirsComment = styled.p`
    color: #636060;
    font-size: 15px;
`;

export const SecondComment = styled.p`
    color: #636060;
    font-size: 12px;
    text-align: center;
`;

export const Description = styled.p`
    color: #636060;
    font-size: 15px;
    text-align: center;
    width: 400px;
    margin: 0 0 20px 0;
`;

export const Category = styled.h2`
    font-size: 20px;
    color: #636060;
    font-weight: 600;
`;


// 

export const ButtonCant = styled.button`
    height: 40px;
    width: 40px;
    background: #FA7A8F;
    color: #fff;
    border-radius: 200px;
    border: none;
    cursor: pointer;
    font-size: 30px;
    margin: 0 20px;
`;

export const ButtonAdd = styled.button`
    width: 100%;
    height: 60px;
    color: #fff;
    cursor: pointer;
    background: #DF1F4D;
    font-weight: 800;
    font-size: 20px;
    border-radius: 10px;
    border: none;

`;