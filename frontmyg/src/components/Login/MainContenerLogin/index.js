'use client';
import { useRouter } from "next/navigation";

import {
    ContenerPageLogin,
    ImageBackLogin,
    LoginContener,
    TitleLogin,
    SubTitleLogin,
    RegisterFooter,
    RegisterFooterButton,
    LoginFooter,
    LoginInput,
    LoginButton,
    LoginFooterButton,
} from './style'
import { useState } from "react";

const PageMainLogin = () =>{
    const router = useRouter()
    const [register, setRegister] = useState(false)
    const loginVerify = async () =>{
        const VerifyCookie = await fetch("http://localhost:3001/users/cookie",{
            method:"get",
            credentials: "include",})
            console.log(VerifyCookie)
        if(VerifyCookie.status == 200){
            router.push("./")
        }
    }
    loginVerify()
    
    const haras = async()=>{
        const checkCookie = await fetch("http://localhost:3001/users/login",{
            method:"get",
            credentials: "include",})
            console.log(checkCookie)
            router.push("./")
    }

    const changeRegister = ()=>{
        if(register){
            setRegister(false)
        }else{
            setRegister(true)
        }
    }
    const HandlerLogin = async (e)=>{
        
        
        const loginForm = document.getElementById("form");
        const inputsLogin = document.querySelectorAll(".inputLogin");

        if(inputsLogin[0].value == "" || inputsLogin[1].value == ""){
            console.log("fino")
        }   else{
            const data = new URLSearchParams();
            for (const pair of new FormData(loginForm)) {
                data.append(pair[0], pair[1]);
            }

            const turo = await fetch("http://localhost:3001/users/login",{
            method:"post",
            body: data,
            credentials: "include",
            })
            if(turo.status == 200){
                haras()
                
                }
            }
        }
    
    const registerUser = async ()=>{
        const registerForm = document.getElementById("formregister");

        
            const dataregister = new URLSearchParams();
            for (const pair of new FormData(registerForm)) {
                dataregister.append(pair[0], pair[1]);
            }

            const respuesta = await fetch("http://localhost:3001/users/userregister",{
            method:"post",
            body: dataregister,
            credentials: "include",
            })
    }

    return(
        <ContenerPageLogin>
            <div style={register ? {position:"absolute",background:"#F24162",width:"100%",height:"96.5%", display:"flex",alignItems:"center",justifyContent:"center",}: {display:"none",}}>
            <LoginContener className="formu" id="formregister" style={{width:"50%", height:"80%",display:"grid",gridTemplateColumns:"1fr 1fr",}}>
                <LoginInput type="text" name="nombre" className="inputRegister" placeholder="Nombre"/>
                <LoginInput type="text" name="apellido"  className="inputRegister" placeholder="Apellido"/>

                <LoginInput type="text" name="usuario" className="inputRegister" placeholder="Usuario"/>
                <LoginInput type="text" name="clave"  className="inputRegister" placeholder="Contraseña"/>

                <LoginInput type="text" name="correo" className="inputRegister" placeholder="Correo electronico"/>
                <LoginInput type="text" name="telefono"  className="inputRegister" placeholder="Telefono"/>

                <LoginInput type="text" name="direccion" className="inputRegister" placeholder="Direccion"/>

                <LoginButton type="button" onClick={registerUser} className="boton" value="Registrar"/>
                
                <LoginFooter style={{gridColumn:"1/3",}}>¿ya tienes cuenta? <LoginFooterButton  type="button" onClick={changeRegister}>ingrese aqui</LoginFooterButton></LoginFooter>
            </LoginContener>
            </div>
            <div>
                <TitleLogin>INICIA SESION EN TU CUENTA</TitleLogin>
                <SubTitleLogin>Lorem isum sis usdcu ys uuiso psp osidusidusids idycy <br/>yx usud idry js du</SubTitleLogin>
            </div>
            <LoginContener className="formu" id="form">
                <LoginInput type="text" name="usuario" className="inputLogin" placeholder="Usuario"/>
                <LoginInput type="text" name="clave"  className="inputLogin" placeholder="Contraseña"/>

                <LoginButton type="button" onClick={HandlerLogin} className="boton" value="Iniciar sesion"/>
                
                <LoginFooter>¿Olvidaste tu contraseña? <LoginFooterButton  type="button">ingrese aqui</LoginFooterButton></LoginFooter>
            </LoginContener>
            <ImageBackLogin src='/img/LoginBack.svg'/>
            <RegisterFooter>¿No posees con una cuenta en M&G Cakes? <br/> <RegisterFooterButton onClick={changeRegister}>Registrate aqui.</RegisterFooterButton></RegisterFooter>
        </ContenerPageLogin>
    )

}

export default PageMainLogin
    