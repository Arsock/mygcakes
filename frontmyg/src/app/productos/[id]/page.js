"use client";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import{
    ContenerMainDetalle,
    ContenerSideBar,
    ContenerProduct,
    ContenerComments,
    TittleConteners,
    DollarPrice,
    BsPrice,
    CantSet,
    ButtonCant,
    FirsComment,
    SecondComment,
    ButtonAdd,
    Imagen,
    Description,
    Category,
    MessageForm,
    InputComment,
    ButtonComment,
    ContentMessage,
    Aras
} from './style'
import { useEffect, useState } from "react";

const detalledelproducto = ()=>{
    const [cantidad,setCantidad] = useState(0)
    const [dataProduct,setDataProduct] = useState([])
    const [iduser,setideuser] = useState("")
    const [loginVerify2,setLoginVerify2] = useState(true)
    const { id } = useParams();
    
    const changeCantidad = (prop)=>{
        if (prop == 1){
        setCantidad(cantidad + 1)
        }else if(prop == 0 && cantidad > 0){
            setCantidad(cantidad - 1)
        }
    }
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
    const addCarrito = async ()=>{
        const formid = document.getElementById("idformcart");
            const data3 = new URLSearchParams();
            for (const pair of new FormData(formid)) {
                data3.append(pair[0], pair[1]);
            }

            const turo = await fetch("http://localhost:3001/products/addcarrito",{
            method:"post",
            body: data3,
            credentials: "include",
            })

    }

    useEffect(()=>{
        (async ()=>{
            const formid = document.getElementById("formid");
            const data = new URLSearchParams();
            for (const pair of new FormData(formid)) {
                data.append(pair[0], pair[1]);
            }

            const turo = await fetch("http://localhost:3001/products/productos",{
            method:"post",
            body: data,
            credentials: "include",
            })

            const turi = turo.json()
            turi.then(async(val) => {
                await setDataProduct(val)
                await viewcookie2()
            })
            // setcount(petiproductos);
            // console.log(count)
        })();
        
    }, []);

    return(
        <>
        <Header/>
        
        <form id="formid" style={{display:"none",}}>
            <input defaultValue={id} name="id"/>
        </form>
        {/* dataProduct[val].nombre */}
        {Object.keys(dataProduct).map((val)=>{
        return(
        <ContenerMainDetalle>

            <ContenerSideBar id="idformcart">

                <TittleConteners>Precio</TittleConteners>
                <DollarPrice>{dataProduct[val].precio}$</DollarPrice>
                <BsPrice>{dataProduct[val].precio * 37}Bs</BsPrice>
                <input value={iduser} name="idusuario" style={{display:"none",}}/>
                <input value={dataProduct[val].idproducto} name="idproducto" style={{display:"none",}}/>
                <input value={dataProduct[val].nombre} name="nombre" style={{display:"none",}}/>
                <input value={dataProduct[val].precio} name="precio" style={{display:"none",}}/>
                <input value={cantidad} name="cantidad" style={{display:"none",}}/>
                <TittleConteners>Cantidad</TittleConteners>
                <CantSet>
                    <ButtonCant type="button" onClick={()=>{changeCantidad(0)}}>-</ButtonCant><TittleConteners>{cantidad}</TittleConteners><ButtonCant type="button" onClick={()=>{ changeCantidad(1)}}>+</ButtonCant>
                </CantSet>

                <FirsComment>Entrega disponible en caracas</FirsComment>
                <SecondComment>Acordar ubicacion de la entrega en el apartado de “Entrega”.</SecondComment>
                <ButtonAdd type="button" onClick={addCarrito}>COMPRAR</ButtonAdd>
            </ContenerSideBar>

            <ContenerProduct>
                <TittleConteners>{dataProduct[val].nombre}</TittleConteners>
                <Category>{dataProduct[val].categoria}</Category>
                <Imagen></Imagen>
                <Description>{dataProduct[val].descripcion}</Description>
            </ContenerProduct>

            <ContenerComments>
                <TittleConteners>Comentarios</TittleConteners>
                <ContentMessage>
                    <Aras></Aras>
                    <MessageForm>
                        <InputComment placeholder="Escriba su comentario..."/>
                        <ButtonComment></ButtonComment>
                    </MessageForm>
                </ContentMessage>
            </ContenerComments>

        </ContenerMainDetalle>
          )
        })}
        </>
    )
}

export default detalledelproducto