import express from 'express';
import { Pool } from 'pg';

const connectPG = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mygcakes',
    password: '20arsock05',
    port: 5432,
})

const router = express.Router();

// RUTAS DE CONSULTA

router.get('/', (_req, res)=>{
    res.send("Products API");
})

router.get('/productos', async (_req, res)=>{
    const respuesta = await connectPG.query('SELECT * FROM productos');
    res.send(respuesta.rows);
})

router.get('/carrito', async (_req, res)=>{
    const respuesta = await connectPG.query('SELECT * FROM carrito');
    res.send(respuesta.rows);
})

// router.get('/carrito', async (_req, res)=>{
//     const respuesta = await connectPG.query('SELECT * FROM carrito WHERE ');
//     res.send(respuesta.rows);
// })

router.post('/productos', async (req, res)=>{
    const { id } = req.body;
    console.log(id)
    const respuesta = await connectPG.query('SELECT * FROM productos WHERE idproducto = ($1)', [id]);
    // console.log(respuesta.rows)
    res.json(respuesta.rows);
})

// RUTAS DE INGRESO

router.post('/addcarrito',async (req,res)=>{
    const { idusuario,  idproducto, nombre, precio, cantidad } = req.body;
    const img = "a";

    const respuesta = await connectPG.query("INSERT INTO carrito (idusuario, idproducto, nombre , precio, cantidad, imagen) VALUES ($1,$2,$3,$4,$5,$6)", [idusuario,  idproducto, nombre, precio, cantidad, img]);

    if(respuesta){
    res.send("Ingreso en la base de datos");
    }
    
})

// RUTAS DE ELIMINACION

router.post('/eliminarcarrito', async (req, _res)=>{
    // const { id } = req.body;
    console.log(req.body)
    // console.log(id)
    // const respuesta = await connectPG.query('DELETE FROM carrito WHERE idcarrito = ($1)', [id]);
    // console.log(respuesta.rows)
})

router.get('/eliminarcarrito/:id', async (req, _res)=>{
    const id = req.params.id;
    console.log(req.params.id)

    const respuesta = await connectPG.query('DELETE FROM carrito WHERE idcarrito = ($1)', [id]);
    // console.log(respuesta.rows)
    
    console.log(respuesta)
})


// RUTAS DE ACTUALIZACION




export default router;