import express from 'express';
import { Pool } from 'pg';
import Jwt  from 'jsonwebtoken';
import { serialize } from 'cookie';
import { verify } from 'jsonwebtoken';

const connectPG = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mygcakes',
    password: '20arsock05',
    port: 5432,
  })

const router = express.Router();


router.get('/', (_req, res)=>{
    res.send("Users API");
})


// LOGIN - COOKIE CREATE

router.post('/login', async (req, res)=>{
    const { usuario, clave } = req.body

    try{
        const respuesta = await connectPG.query('SELECT * FROM usuarios WHERE usuario = ($1) AND clave = ($2)', [usuario,clave]);
        console.log(req.method);

        const token = Jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            id: respuesta.rows[0].idusuario,
            usuario: respuesta.rows[0].usuario,
            nombre: respuesta.rows[0].nombre,
            apellido: respuesta.rows[0].apellido,
            correo: respuesta.rows[0].correo,
            telefono: respuesta.rows[0].telefono,
        },'mygcode18')

        const serializeCookie = serialize('userToken', token,{
            httpOnly:true,
            sameSite:'strict',
            maxAge:1000 + 60 * 60 * 24 * 30,
            path:'/',
        })

        res.setHeader('Set-Cookie', serializeCookie)
        console.log("Cookie Realizada")
        res.status(200).json("Succefuly")

    }
    catch{
        res.status(401).json("xd")
    }
    
})

//  VER COOKIE USUARIO

router.get('/cookie', async (req,res)=>{
   const {userToken} = req.cookies
   if(userToken){
        try{
            const tokenUser = verify(userToken,'mygcode18')
            console.log(tokenUser)
            res.send(tokenUser);
        }catch(error){
            res.status(401).json({error:"Token invalido",})
        }
   }else{
    res.status(401).json({error:"No hay token",})
   }

//    SERAR LA PETICION CON UN SEND PARA ASI PODER ENVIAR DATOS COMO EL COOKIE
})

//  LOGOUT

router.post('/logout', async (req,res)=>{
    const {userToken} = req.cookies
    
    if(!userToken){
        res.status(401).json({error:"No hay token",})
    }
    try{
        verify(userToken, 'mygcode18')
        const serializeCookie = serialize('userToken', 'null',{
            httpOnly:true,
            sameSite:'strict',
            maxAge:0,
            path:'/',
        })

        res.setHeader('Set-Cookie', serializeCookie)

        res.status(200).json({error:"Logout Exitoso"})

    } catch(error){

    }
})


// REGISTRO USUARIO
router.post('/userregister',async (req,res)=>{
    const { nombre, apellido, usuario, clave, correo, telefono, direccion} = req.body;
    console.log("turo")
    // const usuario = "arsock"
    // const clave = "123"
    // const nombre = "Luis"
    // const apellido = "Cordova"
    // const correo = "example@gmail.com"
    // const telefono = "04264676560"
    // const direccion = "Santa Rosalia"
    const rol = "User"
    // const { cedula, cedula2 } = req.body;
    // res.json([cedula, cedula2])
    const respuesta = await connectPG.query("INSERT INTO usuarios (usuario, clave, nombre , apellido, correo, telefono, direccion, rol) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [usuario, clave, nombre, apellido, correo, telefono, direccion, rol]);
    // const respuesta = await connectPG.query("INSERT INTO usuario (cedula) VALUES ($1)", [cedula]);
    if(respuesta){
    res.send("Ingreso en la base de datos");
    }
    
})


router.get('/producto',async (req,res)=>{
    console.log(req.method);
    let nombre = "Galletas"
    let categoria = "Dulces"
    let precio = "3"
    let valoracion = "2"
    let descripcion = "Torta de tres leche con un kilogramo de peso. Esta es para una cantidad de 10 personas."
    let imagen = "no hay imagen pa"
    // const { cedula, cedula2 } = req.body;
    // res.json([cedula, cedula2])
    const respuesta = await connectPG.query("INSERT INTO productos (nombre, categoria, precio , valoracion, descripcion, imagen) VALUES ($1,$2,$3,$4,$5,$6)", [nombre, categoria, precio, valoracion, descripcion, imagen]);
    // const respuesta = await connectPG.query("INSERT INTO usuario (cedula) VALUES ($1)", [cedula]);
    if(respuesta){
    res.send("Ingreso en la base de datos");
    }
    
})


// RUTAS DE ACTUALIZACION

// RUTAS DE ELIMINACION



// router.get('/user/:id', async (req, res)=>{
//     const id = req.params.id;
//     const respuesta = await connectPG.query("SELECT * FROM usuario WHERE cedula = $1", [id]);
//     res.json(respuesta.rows);
// })



export default router;