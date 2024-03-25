import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request){
    // const  jsw = request.cookies.get('userToken').value
    // console.log(jsw)
    // const aras = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTI4MDg2MzYsImlkIjoxLCJ1c3VhcmlvIjoiYXJzb2NrIiwibm9tYnJlIjoiTHVpcyIsImFwZWxsaWRvIjoiQ29yZG92YSIsImNvcnJlbyI6ImV4YW1wbGVAZ21haWwuY29tIiwidGVsZWZvbm8iOiIwNDI2NDY3NjU2MCIsImlhdCI6MTcxMDIxNjYzNn0.HRO95hCOnU-YsvdUVEtDlAaF3taja7NF41IY72HrN6s"

    // if(request.nextUrl.pathname == ("/productos")){
    //     NextResponse.redirect(new URL('/', request.URL))
    // }
    // try{
    //     const payload = await jwtVerify(aras,"mygcode18")
    //     console.log(payload)
    // } catch(error){}

    return NextResponse.next()
}