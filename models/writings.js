const mongoose = require(‘mongoose’)

 const WritingsSchema = new mongoose.Schema(
   {
     description: { type: String },
     done: { type: Boolean },
   }, 
   { timestamps: true }
 );

 const Writings = mongoose.model(‘Writings’, WritingsSchema)

 module.exports = mongoose.model(‘Writings’)