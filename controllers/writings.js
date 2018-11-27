const Writing = require(‘../models/writing’)
 
 async function findAll (ctx) {
   // Fetch all Writing’s from the database and return as payload
   const todos = await Writing.find({})
   ctx.body = writings
 }
 
 async function create (ctx) {
   // Create New Writing from payload sent and save to database
   const newWriting = new Writing(ctx.request.body)
   const savedWriting = await newWriting.save()
   ctx.body = savedWriting
 }
 
 async function destroy (ctx) {
   // Get id from url parameters and find Writing in database
   const id = ctx.params.id
   const writing = await Writing.findById(id)
 
   // Delete writing from database and return deleted object as reference
   const deletedWriting = await writing.remove()
   ctx.body = deletedWriting
 }
 
 async function update (ctx) {
   // Find Writing based on id, then toggle done on/off
   const id = ctx.params.id
   const writing = await Writing.findById(id)
   writing.done = !writing.done
 
   // Update writing in database
   const updatedWriting = await writing.save()
   ctx.body = updatedWriting
 }
 
 module.exports = {
   findAll,
   create,
   destroy,
   update
 }