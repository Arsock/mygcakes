"use client";

import { useState } from "react"
import HeaderPedido from "./HeaderPedido"
import {
    MetodoContener,
    ButtonSelected,
    EnvioContener,
    ButtonContinue,
    EnviarInput
} from './style'

const Pedido = ()=>{
    const [nav,setnav] = useState(1)
    const [test,settest] = useState([])
    var metodopago = [2];

    const metodo = (tipo)=>{
        // settest(test => [...test,"x2"])
        settest([tipo])
        setnav(2)
    }
    const envio = ()=>{
        console.log(test)
        setnav(3)
    }


    return(
        <>
            <HeaderPedido router={nav}/>
            { nav == 1 ? <MetodoContener>
                <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", height: "90%", width:"100vw",}}>
                    <ButtonSelected onClick={()=>{metodo(1)}}>
                        <h1 style={{color:"#FA7A8F",}}>PAGO MOVIL</h1>
                        <p style={{color:"#B3B3B3",}}>Pagar su totalidad <br/> en bolívares</p>
                    </ButtonSelected>

                    <ButtonSelected onClick={()=>{metodo(2)}}>
                        <h1 style={{color:"#FA7A8F",}}>DIVISA</h1>
                        <p style={{color:"#B3B3B3",}}>Pagar su totalidad <br/>en divisa</p>
                    </ButtonSelected>

                    <ButtonSelected onClick={()=>{metodo(3)}}>
                        <h1 style={{color:"#FA7A8F",}}>MIXTO</h1>
                        <p style={{color:"#B3B3B3",}}>Pagar un parte<br/>en bs y la otra en divisa</p>
                    </ButtonSelected>
                    
                </div>
                <p style={{width:"500px",fontSize:"14px", textAlign:"center",color: "#B3B3B3",}}>Los pagos serán realizados después de que se conforme su pedido,  luego de eso comunicarse con el administrador que lleve su pedido</p>
            </MetodoContener>
            : <div style={{display:"none",}}></div>}
            {nav == 2 ? 
                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",}}>
                    <EnvioContener>
                        <EnviarInput id="fechaentrega" type="text" placeholder="Fecha de entrega" onFocus={()=>{
                            const xd = document.getElementById("fechaentrega")
                            xd.type = "date"
                        }}/>
                        <EnviarInput id="direccion" placeholder="Direccion"/>
                    </EnvioContener>
                    <ButtonContinue onClick={()=>{envio()}}>Continuar</ButtonContinue>
                </div>
            
            : <div style={{display:"none",}}></div>}
        </>
    )
}

export default Pedido