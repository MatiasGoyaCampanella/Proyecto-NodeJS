// RUTAS DE USUARIOS

const router = require("express").Router(); // importar express.Router()
const usuarioController = require('../controllers/usuario.controller') // importar el archivo de controladores de usuarios


// PARA SUBIR ARCHIVOS
const globalConstants = require('../const/globalConstants') // importar las constantes globales
var multer = require('multer') // MULTER ES UN MODULO PARA SUBIR ARCHIVOS A NUESTRO SERVIDOR 
var upload = multer({ // INSTANCIAMOS MULTER Y LO CONFIGURAMOS
    dest: 'uploads/archivos-usuarios/', //RUTA DONDE SE VAN A SUBIR LOS ARCHIVOS
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } // PESO MAXIMO DEL ARCHIVO 20MB
})

const validate = require('../middlewares/validate')
const usuarioScheme = require('../middlewares/schemes/usuario.scheme')

router.post('/subirArchivo', upload.single('jpg'), usuarioController.subirArchivo) // RUTA PARA SUBIR UN ARCHIVO
router.post('/descargarArchivo/', usuarioController.descargarArchivo) // RUTA PARA OBTENER UN ARCHIV


router.get('/prueba', usuarioController.prueba)
router.get('/', usuarioController.listar)
router.post('/', validate(usuarioScheme.crearUsuario), usuarioController.crear)
router.get('/:idUsuario', usuarioController.listarInfo)


module.exports = router;