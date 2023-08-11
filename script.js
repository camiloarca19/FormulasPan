const ingredientes = {
    harina: 0.55155,
    azucar: 0.06619,
    sal: 0.01104,
    margarina: 0.13235,
    huevos: 0.05295,
    agua: 0.17209,
    levadura: 0.01104,
    escencia: 0.00276,
    color: 0.00003
  };
var masa = 5000
  function determinarPeso (objeto){
    const peso = {}
    for (const i in objeto){
        peso[i]=objeto[i]*masa
    }
    return peso
  }