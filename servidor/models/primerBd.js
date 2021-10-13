import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const gamerSchema = new Schema({
    nombre: {type:String, required:[true,'Nombre de producto obligatorio']},
    categoria: {type:String, required:[true,'Categoría de producto obligatoria']},
    date: {type: Date, default: Date.now},
    cantidad: {type:Number, required:[true,'Cantidad de artículos obligatoria']}
});

//Convertir modelo

const primerBd = mongoose.model('primerBd',gamerSchema);
export default primerBd;