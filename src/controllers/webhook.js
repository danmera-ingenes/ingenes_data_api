const { PersonaModel } = require('../models/Persona.model');
const internalParams = require('../utils/json_produccion.json');


const getData = async (req, res) => {
  try {
    const data = req.body.current;
    const paramsData = internalParams.data;
    const paramsBlue = internalParams.databluedonor;
    const paramsDinamica = internalParams.dinamica;
    let result={};

    // Create the entry on the mongo database
    const newPersona = await PersonaModel.create(data);
    // await newPersona.create();

    // Converting to readable keys
    // for(let key in paramsData ){
    //   if(paramsData.hasOwnProperty(key)){
    //     let newKey = key;
    //     let valueKey = paramsData[key];
    //     result[newKey] = data[valueKey];
    //   }
    // }

    // for (let key in paramsBlue) {
    //   if (paramsBlue.hasOwnProperty(key)) {
    //     let newKey = key;
    //     let valueKey = paramsBlue[key];
    //     result[newKey] = data[valueKey];
    //   }
    // }

    // for (let key in paramsDinamica) {
    //   if (paramsDinamica.hasOwnProperty(key)) {
    //     let newKey = key;
    //     let valueKey = paramsDinamica[key];
    //     result[newKey] = data[valueKey];
    //   }
    // }

    // for(let key in data){
    //   if(data.hasOwnProperty(key) && !paramsData.hasOwnProperty(key) && !Object.values(paramsData).includes(key)){
    //     if (!paramsBlue.hasOwnProperty(key) && !Object.values(paramsBlue).includes(key)){
    //       if(!paramsDinamica.hasOwnProperty(key) && !Object.values(paramsDinamica).includes(key)){
    //         result[key] = data[key]; 
    //       }
    //     }
    //   }
    // }

    res.status(200).send("Persona enviada a la base de datos");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error processing data");
  }
}

module.exports = {
  getData
}

// Object.entries(object1).forEach(([key, value]) => {
//   result[value] = object2[value];
// });