'use client';
import { useState } from 'react';
import { useRouter } from "next/navigation";

import {
    ContenerProduct,
    TitleProduct,
    CategoryProduct,
    ImageProduct,
    StarProduct,
    ImageStar,
    AddProduct,
} from './style'


const Product = ({titulo,categoria,precio,id}) =>{
    const [start,setStart] = useState([1,1,1,0,0])

    const router = useRouter()
    const detalles = (a)=>{
        console.log("xd")
        router.push(`./productos/${a}`)
    }

    const boton = (a)=>{
        if (a == 1){
            setStart([1,0,0,0,0])
        } else if(a == 2){
            setStart([1,1,0,0,0])
        } else if(a == 3){
            setStart([1,1,1,0,0])
        }else if(a == 4){
            setStart([1,1,1,1,0])
        }else if(a == 5){
            setStart([1,1,1,1,1])
        }else{
            setStart([1,1,1,0,0])
        }
    }
    return(
        <ContenerProduct onClick={()=>{detalles(id)}} onMouseLeave={()=>{boton(0)}}>
            <TitleProduct>{titulo}</TitleProduct>
            <CategoryProduct>{categoria}</CategoryProduct>
            <CategoryProduct>{precio}$</CategoryProduct>
            <ImageProduct></ImageProduct>
            <StarProduct>
                <div>
                    <ImageStar onMouseOver={()=>{boton(1)}} src='/img/star.svg' style={start[0] == 1 ? {filter: "invert(63%) sepia(6%) saturate(4540%) hue-rotate(303deg) brightness(98%) contrast(101%)",}: {}}/>
                    <ImageStar onMouseOver={()=>{boton(2)}} src='/img/star.svg' style={start[1] == 1 ? {filter: "invert(63%) sepia(6%) saturate(4540%) hue-rotate(303deg) brightness(98%) contrast(101%)",}: {}}/>
                    <ImageStar onMouseOver={()=>{boton(3)}} src='/img/star.svg' style={start[2] == 1 ? {filter: "invert(63%) sepia(6%) saturate(4540%) hue-rotate(303deg) brightness(98%) contrast(101%)",}: {}}/>
                    <ImageStar onMouseOver={()=>{boton(4)}} src='/img/star.svg' style={start[3] == 1 ? {filter: "invert(63%) sepia(6%) saturate(4540%) hue-rotate(303deg) brightness(98%) contrast(101%)",}: {}}/>
                    <ImageStar onMouseOver={()=>{boton(5)}} src='/img/star.svg' style={start[4] == 1 ? {filter: "invert(63%) sepia(6%) saturate(4540%) hue-rotate(303deg) brightness(98%) contrast(101%)",}: {}}/>
                </div>
                <AddProduct>+</AddProduct>
            </StarProduct>
        </ContenerProduct>
    )
}

export default Product