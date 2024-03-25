import {
    HeaderContener,
    ButtonBack,
    ButtonNav,
    HeaderH1,
    HeaderP
} from "./style"

const HeaderPedido = ({router})=>{
    return(
        <HeaderContener>
            <ButtonBack>Volver al inicio</ButtonBack>
            <div style={{display:"flex",justifyContent:"center",gap:"150px",}}>
                <ButtonNav style={router == 1 ? {background:"#FA7A8F",color:"#fff",} : {}}>1</ButtonNav>
                <ButtonNav style={router == 2 ? {background:"#FA7A8F",color:"#fff",} : {}}>2</ButtonNav>
                <ButtonNav style={router == 3 ? {background:"#FA7A8F",color:"#fff",} : {}}>3</ButtonNav>
            </div>
            
            { router == 1 ? 
                <HeaderH1>METODO DE PAGO</HeaderH1>
            : <div style={{display:"none",}}></div>}
            { router == 1 ? 
                <HeaderP>Por favor seleccione el método de pago</HeaderP>
            : <div style={{display:"none",}}></div>}

            { router == 2 ? 
                <HeaderH1>ENVIO</HeaderH1>
            : <div style={{display:"none",}}></div>}
            { router == 2 ? 
                <HeaderP>Por favor ingrese la dirección y la fecha de entrega</HeaderP>
            : <div style={{display:"none",}}></div>}

            { router == 3 ? 
                <HeaderH1>FINALIZAR</HeaderH1>
            : <div style={{display:"none",}}></div>}
            { router == 3 ? 
                <HeaderP>Perdido completado</HeaderP>
            : <div style={{display:"none",}}></div>}
        </HeaderContener>
    )
}

export default HeaderPedido