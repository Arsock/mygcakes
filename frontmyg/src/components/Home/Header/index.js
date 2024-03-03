// IMPORT COMPONENT STYLED
import{
    HeaderContenedor,
    Logo,
    Navbar,
    UserOptions,
    LogoContener,
    ButtonNavbar,
    ButtonUserOption,
} from './style'

const Header = ()=>{
    return(
        <HeaderContenedor>
            <LogoContener>
                <Logo src='/img/Logo.jpg'/>
            </LogoContener>
            
            <Navbar>
                <ButtonNavbar style={{color:"#FA7A8F", fontWeight: 700,}}>INICIO</ButtonNavbar>
                <ButtonNavbar>PRODUCTOS</ButtonNavbar>
                <ButtonNavbar>CATEGORIAS</ButtonNavbar>
                <ButtonNavbar>CONTACTO</ButtonNavbar>
            </Navbar>
            <UserOptions>
                <ButtonUserOption style={{width: "50px", borderRadius:"100%",}}>
                    <p>LC</p>
                </ButtonUserOption>
            </UserOptions>
        </HeaderContenedor>
    )
}
export default Header