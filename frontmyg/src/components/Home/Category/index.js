import {
    TitleCategoryMain,
    ContenerCategoryMain,
    ContenerCategorys,
    CategoryMain,
} from './style'

const Category = () =>{
    return(
        <ContenerCategoryMain>
            <TitleCategoryMain>Categorias</TitleCategoryMain>
            <ContenerCategorys>
                <CategoryMain style={{flexGrow: "1",}}></CategoryMain>
                <CategoryMain style={{flexGrow: "2",}}></CategoryMain>
            </ContenerCategorys>
            <ContenerCategorys style={{marginTop: "30px",}}>
                <CategoryMain style={{flexGrow: "2",}}></CategoryMain>
                <CategoryMain style={{flexGrow: "1",}}></CategoryMain>
            </ContenerCategorys>
        </ContenerCategoryMain>
    )
}
export default Category