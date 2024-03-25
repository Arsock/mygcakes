'use client';
import { useState } from 'react';
import {
    ContenerMainCarrito,
    ProductCarrito,
    TotalCarrito,
    AllPedido,
    Pedido,
    Img,
    ContentTittles,
    Titulo,
    EliminarProducto
} from './style'

const ProdutCarrito = ({titulo,precio,unidades,idp})=>{
    const [isloaded,setisloaded] = useState(true)


    const eliminarCarrito = async (a)=>{
            console.log(a)

            const turo = await fetch(`http://localhost:3001/products/eliminarcarrito/${a}`,{
            method:"get",
            credentials: "include",
            })
            
    }

    return(
            <Pedido id="formidcar" style={isloaded ? {} : {display:"none",}}>
                                        <div style={{display:"flex", gap:"30px",}}>
                                        <Img></Img>
                                        <ContentTittles>
                                            <Titulo>{titulo}</Titulo>
                                            <p>{precio}$</p>
                                        </ContentTittles>
                                        </div>
                                        <div style={{display:"flex",gap:"20px",alignItems:"center",}}>
                                            <p style={{fontWeight:"500",}}>{unidades} unid</p>
                                            <EliminarProducto type='button' onClick={()=>{
                                                eliminarCarrito(idp)
                                                setisloaded(false)
                                                }}>x</EliminarProducto>
                                        </div>
                                    </Pedido>
)}

export default ProdutCarrito