import * as mongoose from 'mongoose';
export const ItemSchema = new mongoose.Schema({
    name: String, // always type of attribute will capital latter like String not string 
    description: String, 
    qty: Number,
})