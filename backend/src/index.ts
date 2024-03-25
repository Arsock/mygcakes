import express from 'express';
import usersRutes from './routes/users';
import productsRutes from './routes/products';
import { Pool } from 'pg';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const connectPG = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mygcakes',
    password: '20arsock05',
    port: 5432,
})

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false} ));
app.use(function (_req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
app.use(cors({origin: 'http://localhost:3000'}));

app.use(cookieParser())


const PORT = 3001;

app.use('/users', usersRutes);
app.use('/products', productsRutes);

app.listen(PORT, async ()=>{
    try{
        const table1 = await connectPG.query('CREATE TABLE Usuarios (idUsuario SERIAL,usuario varchar(20), clave varchar(30), nombre varchar(40), apellido varchar(40), correo varchar(80), telefono varchar(20), direccion varchar(100), rol varchar(8), PRIMARY KEY (idUsuario))');
        const table2 = await connectPG.query('CREATE TABLE Productos (idProducto SERIAL,nombre varchar(20), categoria varchar(30), precio varchar(40), valoracion varchar(40), descripcion varchar(500), imagen varchar(80), PRIMARY KEY (idProducto))');
        const table3 = await connectPG.query('CREATE TABLE Carrito (idCarrito SERIAL,idUsuario varchar(20),idProducto varchar(20),nombre varchar(20), precio varchar(40), cantidad varchar(40), imagen varchar(80), PRIMARY KEY (idCarrito))');
        if (table1 && table2 && table3){
            console.log("Tablas creadas correctamente");
        }
    }
    catch{
        
    }
    finally{
        console.log(`El servidor empezo en el puerto ${PORT}`);
    }
    
})

