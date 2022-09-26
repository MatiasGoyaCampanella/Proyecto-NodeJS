// var http = require("http") //importa el modulo http

// http.createServer(function(req,res) {
//    res.writeHead(200, {"Content-Type": "text/html"});
//    res.end("Hola")
// }).listen(5000)

// console.log("Servicio funcionando en http://localhost:5000");

/*

// ejemplo API con Express

const express = require("express"); //importa express
const app = express(); // crea una instancia de express

//-----------------CONFIGURACION

app.use(express.json()); // permite que el express entienda json
app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios formularios por post

//-----------------RUTAS

// cuando es GET recibo el dato por la url
app.get("/:nombre", (req, res) => { // req: request, res: response
    res.send("Hola" + req.params.nombre); // envia una respueta y extrae el nombre del parámetro
});

// cuando es POST recibo el dato por el BODY
app.post("/",(req, res) => { // req: request, res: response
    res.send("Hola" + req.body.nombre); // envia una respuesta y extraigo el nombre del BODY
});

//-----------------PUERTOS

// Configura el puerto
app.listen(5000); // escucha en el puerto 5000
console.log("Servidor corriendo en el puerto 5000");
 
// COMENTARIOS
// Al querer utilizar req.body, se debe utilizar --> app.use(express.json())

*/

const express = require("express")

const globalConstants = require("./const/globalConstants")
const routerConfig = require("./routes/index.routes")



const configuracionApi = (app) => {
    app.use(express.json()); // permite que el express entienda json
    app.use(express.urlencoded({ extended: true })); // permite que express entienda formularios formularios por post

    return;
}

const configuracionRouter = (app) => {
    app.use("/api/", routerConfig.rutas_init())
    
}

const init = () => {
    const app = express() // crea una instancia de express
    configuracionApi(app) // configura api

    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log("La aplicación se está ejecutando en el puerto: + globalConstants.PORT")
}

init();

