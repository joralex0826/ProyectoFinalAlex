import express from 'express';
const router = express.Router();

//importar el modelo nota 
import PrimerBd from '../models/primerBd';

//Agregar un registro

router.post('/nuevo-registro',async(req,res)=>{
    const body = req.body;

    try {
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio algo inesperado',
            error
        }) 
    }
});

//Exportar  la configuración de express

module.exports = router;