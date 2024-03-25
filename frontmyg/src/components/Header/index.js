"use client";
import { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";

import{
    HeaderContenedor,
    Logo,
    Navbar,
    UserOptions,
    LogoContener,
    ButtonNavbar,
    ButtonUserOption,
    LoginButton,
    Sidebar,
    ButtonSidebar
} from './style'

const Header = ({page})=>{
    const router = useRouter()
    const [initialName,setInitialName] = useState("");
    const [sideBar,setSideBar] = useState(false);
    const [loginVerify,setLoginVerify] = useState(true);
    const [pageFocus,setPageFocus] = useState(page);

    const viewcookie = async ()=>{
        const cookie = await fetch("http://localhost:3001/users/cookie",{
            method:"get",
            credentials: "include",
            })
        try{
            const a = await cookie.json()
            setInitialName(a.nombre[0] + a.nombre[1] + a.nombre[2])
            setLoginVerify(true)
        } catch{
            console.log("paso algo")
            setLoginVerify(false)
        }
        
    }
    const changeSidebar = () =>{
        if(sideBar){
            setSideBar(false)
        }else{
            setSideBar(true)
        }
        
    }

        const logout = async ()=>{
        const cookie = await fetch("http://localhost:3001/users/logout",{
            method:"post",
            credentials: "include",
            })
        }


    useEffect(()=>{
        viewcookie()
    })

    return(
        <HeaderContenedor>
            <LogoContener>
                <Logo src='/img/Logo.jpg'/>
            </LogoContener>
            
            <Navbar>
                <ButtonNavbar onClick={()=>{router.push('/')}} style={ pageFocus == 1 ? {color:"#FA7A8F", fontWeight: 700,}: {}}>INICIO</ButtonNavbar>
                <ButtonNavbar onClick={()=>{router.push('/productos')}} style={ pageFocus == 2 ? {color:"#FA7A8F", fontWeight: 700,}: {}}>PRODUCTOS</ButtonNavbar>
                <ButtonNavbar style={ pageFocus == 3 ? {color:"#FA7A8F", fontWeight: 700,}: {}}>CATEGORIAS</ButtonNavbar>
                <ButtonNavbar style={ pageFocus == 4 ? {color:"#FA7A8F", fontWeight: 700,}: {}}>CONTACTO</ButtonNavbar>
            </Navbar>
            <UserOptions>
                {loginVerify ? 
                <ButtonUserOption onClick={changeSidebar} style={{width: "50px", borderRadius:"100%",}}>
                    <p>{initialName}</p>
                </ButtonUserOption>
                :
                <LoginButton onClick={()=>{router.push('./login')}}>Iniciar sesión</LoginButton>
                }
                
            </UserOptions>
            <Sidebar style={ sideBar ? {width: "300px",}: {width: "0px",}}>
                <h1 style={sideBar ? {fontSize:"19px",width:"100%" ,textAlign: "center",color:"#fff",}: {display:"none",}}>Luis Cordova</h1>
                <ButtonSidebar style={ sideBar ? {}: {display:"none",}} onClick={changeSidebar}>Cerrar panel</ButtonSidebar>
                <ButtonSidebar onClick={()=>{router.push('/carrito')}} style={ sideBar ? {}: {display:"none",}}>Carrito</ButtonSidebar>
                <ButtonSidebar style={ sideBar ? {}: {display:"none",}}>Notificaciones</ButtonSidebar>
                <ButtonSidebar onClick={logout} style={ sideBar ? {}: {display:"none",}}>Cerrar sesión</ButtonSidebar>
            </Sidebar>
        </HeaderContenedor>
    )
}
export default Header