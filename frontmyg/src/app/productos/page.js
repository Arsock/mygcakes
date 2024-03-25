"use client";
import Header from "@/components/Header";
import ProductList from "@/components/ProductsPage";

const ProductsPage = ()=>{
    // UN LOGOUT
    // const viewcookie = async ()=>{
    //     const cookie = await fetch("http://localhost:3001/users/cookie",{
    //         method:"get",
    //         credentials: "include",
    //         })
    //     try{
    //         const a = await cookie.json()
    //         console.log(a.nombre)
    //     } catch{
    //         console.log("paso algo")
    //     }
        
        
    // }
    // const logout = async ()=>{
    //     const cookie = await fetch("http://localhost:3001/users/logout",{
    //         method:"post",
    //         credentials: "include",
    //         })
        
        
    // }


    return(
        <>
            <Header page="2"/>
            <ProductList/>
        </>
    )
}

export default ProductsPage;