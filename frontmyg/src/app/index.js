import Header from '@/components/Header'
import CarruselBanner from '@/components/Home/CarruselHome'
import ProductsMain from '@/components/Home/ProductsMain'
import Category from '@/components/Home/Category'

const Home = () =>{
    
    return(
        <>
            <Header page="1"/>
            <CarruselBanner/>
            <ProductsMain/>
            <Category/>
        </>
    )
}

export default Home