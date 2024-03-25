'use client';
import { useEffect, useState } from 'react';
import ProdutCarrito from './productcar';
import {
    ContenerMainCarrito,
    ProductCarrito,
    TotalCarrito,
    AllPedido,
    ResumenContener,
    TotalPrice,
    Continue,
} from './style'

const Carrito = ()=>{
    const [car,setCar] = useState([])
    const [loginVerify2,setLoginVerify2] = useState(true)
    const [ideuser,setideuser] = useState("")
    const [isloaded,setisloaded] = useState(true)

    var priceproduts = 0;

    const viewcookie2 = async ()=>{
        const cookie2 = await fetch("http://localhost:3001/users/cookie",{
            method:"get",
            credentials: "include",
            })
        try{
            const a = await cookie2.json()
            setideuser(a.id)
            setLoginVerify2(true)
        } catch{
            console.log("paso algo")
            setLoginVerify2(false)
        }
    }

    
    useEffect(()=>{
        (async ()=>{
            const petiproductos = await fetch("http://localhost:3001/products/carrito",{
            method:"get",
            credentials: "include",
        })
            const turo7 = petiproductos.json()
            turo7.then(async(val) => {
                await setCar(val)
                await viewcookie2()
            })
            // setcount(petiproductos);
            // console.log(count)
        })();
    }, []);

    return(
        <ContenerMainCarrito>

            <ProductCarrito>
                <h1 style={{margin:"20px 10px", color:"#FA7A8F",}}>Carrito de compras</h1>
                    <AllPedido>
                    
                    {Object.keys(car).map((val)=>{
                                if(car[val].idusuario == ideuser){
                                    priceproduts = priceproduts + car[val].precio * car[val].cantidad;
                                return(
                                   <ProdutCarrito titulo={car[val].nombre} precio={car[val].precio * car[val].cantidad} unidades={car[val].cantidad} idp={car[val].idcarrito}/>
                                    
                               )
                                }
                    })} 
                    </AllPedido>
            </ProductCarrito>

            <TotalCarrito>
                <h1 style={{margin:"20px 0", color:"#FA7A8F",}}>Resumen del pedido</h1>
                <ResumenContener>
                    <div>
                    <div style={{display:"flex",justifyContent:"space-between",}}>
                    <TotalPrice>Total</TotalPrice> <TotalPrice>{priceproduts} $</TotalPrice>
                    </div>
                    <p style={{textAlign:"end",fontSize: "18px",color:"#656565",}}>{priceproduts * 37} Bs</p>
                    </div>
                    <Continue>Continuar</Continue>
                </ResumenContener>
            </TotalCarrito>

        </ContenerMainCarrito>
    )
}
{/* <Pedido id="formidcar" style={isloaded ? {} : {background:"red",}}>
<div style={{display:"flex", gap:"30px",}}>
<Img></Img>
<ContentTittles>
    <Titulo>{car[val].nombre}</Titulo>
    <p>{car[val].precio * car[val].cantidad}$</p>
</ContentTittles>
</div>
<div style={{display:"flex",gap:"20px",alignItems:"center",}}>
    <p style={{fontWeight:"500",}}>{car[val].cantidad} unid</p>
    <EliminarProducto type='button' onClick={()=>{
        eliminarCarrito(car[val].idcarrito)
        setisloaded(false)
        }}>x</EliminarProducto>
</div>
    <input  defaultValue={car[val].idcarrito} name="id"/>
</Pedido> */}
export default Carrito