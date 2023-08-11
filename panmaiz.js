const data = [
    { tipo: "$500", cantidad: 15, latas: 0,picada: 2100, pesoindividual: 58.3 },
    { tipo: "$1000", cantidad: 12, latas: 0,picada: 0, pesoindividual: 130 },
    
  ]

  const listaDeIngredientes = [
    { ingrediente: "harina", porcentaje: 0.491852746 },
    { ingrediente: "harina de maiz", porcentaje: 0.03922752 },
    { ingrediente: "azucar", porcentaje: 0.05914303 },
    { ingrediente: "sal", porcentaje: 0.011164756 },
    { ingrediente: "margarina", porcentaje: 0.137598069 },
    { ingrediente: "huevos", porcentaje: 0.05914303 },
    { ingrediente: "leche en polvo", porcentaje: 0.009957755 },
    { ingrediente: "polvo de hornear", porcentaje: 0 },
    { ingrediente: "cuajada", porcentaje: 0 },
    { ingrediente: "agua", porcentaje: 0.181050091 },
    { ingrediente: "levadura", porcentaje: 0.009354255 },
    { ingrediente: "escencia", porcentaje: 0.001508751 }
  ];
  
  const resultados = document.querySelector('.resutados')
  const buttondone = document.querySelector('.done')
  buttondone.addEventListener('click',function(){
      resultados.classList.toggle('inactive')
      latasSection.classList.toggle('inactive')
  })
  
  
  const buttonCambiarPeso = document.querySelector('.cambiar-peso')
  buttonCambiarPeso.addEventListener('click',function(){
      pesosSection.classList.toggle('inactive')
  })
  function createIngrediente (ingrediente,peso){
      const container = document.createElement('div')
      container.classList.add('ingrediente')
      const label = document.createElement('label')
      label.innerText = ingrediente
      const span = document.createElement('span')
      span.innerText = peso
      container.append(label,span)
      return container
  }
  function renderResultados(lista){
      lista.forEach(element =>{
          resultados.append(createIngrediente(element.ingrediente, element.peso))
      })
  }
  
  
  var pesoMoje;
  
  const latasSection = document.querySelector('.latas-container')
  const pesosSection = document.querySelector('.pesos-container')
  const moje =document.querySelector('#moje')
  {/* <div class="tipo-pan">
          <label for="">pan de 500$</label>
          <input type="number" value="300">
          <input type="number" value="2">
      </div> */}
  
  
  function createPan(tipo,cantidad,latas){
      const tipoPan = document.createElement('div');
      tipoPan.classList.add('tipo-pan')
      const title = document.createElement('label')
      title.innerText=tipo
      const cantidadPanes = document.createElement('input')
      cantidadPanes.setAttribute('type','number')
      cantidadPanes.classList.add('cantidadPanes')
      cantidadPanes.value=cantidad;
      cantidadPanes.addEventListener('change',function(){
          const index =data.find(objeto => objeto.tipo===title.innerText)
          index.cantidad = cantidadPanes.value
          actualizar()
          
      })
      const cantidadLatas = document.createElement('input')
      cantidadLatas.setAttribute('type','number')
      cantidadLatas.value = latas;
      cantidadLatas.addEventListener('change',function(){
          const index =data.find(objeto => objeto.tipo===title.innerText)
          index.latas = cantidadLatas.value
          actualizar()
      })
      tipoPan.append(title,cantidadPanes,cantidadLatas);
      return tipoPan
  }
  function createPesos(tipo,picada,pesoindividual){
      const tipoPan = document.createElement('div');
      tipoPan.classList.add('tipo-pan')
      const title = document.createElement('label')
      title.innerText=tipo
      const picadahtml = document.createElement('input')
      picadahtml.setAttribute('type','number')
      picadahtml.classList.add('picada')
      picadahtml.value=picada;
      picadahtml.addEventListener('change',function(){
          const index =data.find(objeto => objeto.tipo===title.innerText)
          index.picada = picadahtml.value
          index.pesoindividual= picadahtml.value/36
          pesoIndividual.value=Math.round(index.pesoindividual)
          actualizar()
          
      })
      const pesoIndividual = document.createElement('input')
      pesoIndividual.setAttribute('type','number')
      pesoIndividual.value = pesoindividual;
      pesoIndividual.addEventListener('change',function(){
          const index =data.find(objeto => objeto.tipo===title.innerText)
          index.pesoindividual = pesoIndividual.value
          actualizar()
      })
      tipoPan.append(title,picadahtml,pesoIndividual);
      return tipoPan
  }
  
  function actualizar(){
      pesoMoje=0;
  
      data.forEach(element => {
          pesoMoje += element.cantidad*element.latas*element.pesoindividual
      })
      moje.value = pesoMoje
      listaDeIngredientes.forEach(element=>{
          element.peso= Math.round(element.porcentaje*pesoMoje)
      })
      resultados.innerHTML=''
      renderResultados(listaDeIngredientes)
      
  }
  
  function renderList(lista,section){
      lista.forEach(element => {
          section.append(createPan(element.tipo,element.cantidad,element.latas))
      });
  }
  function renderList2(lista,section){
      lista.forEach(element => {
          section.append(createPesos(element.tipo,element.picada,element.pesoindividual))
      });
  }
  
  renderList(data,latasSection)
  renderList2(data,pesosSection)
  
  actualizar()