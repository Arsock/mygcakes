"use client";
import Header from "@/components/Header";
import Product from "../Product";
import { useRouter } from "next/navigation";
import {
    ContenerPageProducts,
    Products,
    Aside,
    ProductsContener,
    TittlePageProducts,
    CategoryP
} from './style'
import { useEffect, useState } from "react";

const ProductList = ()=>{

    // const [count, setcount] = useState([])
    const [aja, setaja] = useState("")

    const router = useRouter()
    const detalles = (a)=>{
        console.log("xd")
        router.push(`./productos/${a}`)
    }
    // const peticionproductos = async ()=>{
    //     const petiproductos = await fetch("http://localhost:3001/products/productos",{
    //         method:"get",
    //         credentials: "include",
    //     })
    // }


    useEffect(()=>{
        (async ()=>{
            const petiproductos = await fetch("http://localhost:3001/products/productos",{
            method:"get",
            credentials: "include",
        })
            const turo = petiproductos.json()
            turo.then(async(val) => {
                await setaja(val)
            })
            // setcount(petiproductos);
            // console.log(count)
        })();
    }, []);



    return(
        <ContenerPageProducts>
            <Aside>
                <TittlePageProducts>categorias</TittlePageProducts>
                <CategoryP>Tortas</CategoryP>
                <CategoryP>Dulces</CategoryP>
            </Aside>
            <Products>
                <TittlePageProducts>Todos los productos</TittlePageProducts>
                <ProductsContener>
                        {Object.keys(aja).map((val)=>{
                            return(
                                <Product titulo={aja[val].nombre} categoria={aja[val].categoria} id={aja[val].idproducto} precio={aja[val].precio} onClick={detalles}/>
                            )
                        })}
                </ProductsContener>
            </Products>
        </ContenerPageProducts>
    )
}

export default ProductList;