import Product from '@/components/Product'

import {
    ContenerProductMain,
    TitleProductMain,
    ProductContenerMain,
} from './style'

const ProductosMain = () =>{
    return(
        <ContenerProductMain>
            <TitleProductMain>Descubre todo lo nuevo</TitleProductMain>
            <ProductContenerMain>
                <Product titulo="TITULO" categoria="CATEGORIA"/>
                <Product titulo="TITULO" categoria="CATEGORIA"/>
                <Product titulo="TITULO" categoria="CATEGORIA"/>
                <Product titulo="TITULO" categoria="CATEGORIA"/>
            </ProductContenerMain>
        </ContenerProductMain>
        
    )
}

export default ProductosMain