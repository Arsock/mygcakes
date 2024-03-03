import{
    CarruselContener,
    Banner,
    ButtonBanner,
    TituloBanner,
    ButtonsContener,
} from './style.js'

const CarruselBanner = ()=>{
    
    return(
        <CarruselContener>
            <TituloBanner>NUESTROS MEJORES PRODUCTOS</TituloBanner>
            <Banner>
            
            </Banner>
            <ButtonsContener>
                <ButtonBanner style={{background:'#DF1F4D',}}></ButtonBanner>
                <ButtonBanner></ButtonBanner>
                <ButtonBanner></ButtonBanner>
                <ButtonBanner></ButtonBanner>
            </ButtonsContener>
            
        </CarruselContener>
    );
}

export default CarruselBanner