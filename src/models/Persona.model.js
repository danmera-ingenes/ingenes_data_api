const { Schema, model } = require('mongoose');

const personaSchema = new Schema({},{timestamps: true, strict: false});
const PersonaModel = model('Persona', personaSchema);

module.exports = {
  PersonaModel
}
