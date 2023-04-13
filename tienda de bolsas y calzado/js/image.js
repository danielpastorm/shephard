window.onload = function () {

  //codigo practica 7
  var siguiente = document.getElementById("adelante")
  siguiente.addEventListener("click", versiguiente) // evento y asignacion de id para poder usar la funcion
  var siguiente = document.getElementById("atras")
  siguiente.addEventListener("click", veratras)

  var siguiente1 = document.getElementById("adelante1")
  siguiente1.addEventListener("click", versiguiente1)
  var siguiente = document.getElementById("atras1")
  siguiente.addEventListener("click", veratras1)

  var siguiente1 = document.getElementById("adelante2")
  siguiente1.addEventListener("click", versiguiente2)
  var siguiente = document.getElementById("atras2")
  siguiente.addEventListener("click", veratras2)

  var siguiente1 = document.getElementById("adelante3")
  siguiente1.addEventListener("click", versiguiente3)
  var siguiente = document.getElementById("atras3")
  siguiente.addEventListener("click", veratras3)

  var siguiente1 = document.getElementById("adelante4")
  siguiente1.addEventListener("click", versiguiente4)
  var siguiente = document.getElementById("atras4")
  siguiente.addEventListener("click", veratras4)

  function versiguiente() { //funcion para simular la galeria de una imagen
    var aux = document.getElementById("producto")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251083.jpg'))
      aux.src = "/img/handbags-2251084.jpg"
    else if (ruta.includes('/img/handbags-2251084.jpg'))
      aux.src = "/img/handbags-2251085.jpg"
    else if (ruta.includes("/img/handbags-2251085.jpg"))
      aux.src = "/img/handbags-2251083.jpg"

    //Producto 2 
    if (ruta.includes('/img/ImgVersiones/bolsa1/3546617.webp'))
      aux.src = "/img/ImgVersiones/bolsa1/3546618.webp"
    else if (ruta.includes('/img/ImgVersiones/bolsa1/3546618.webp'))
      aux.src = "/img/ImgVersiones/bolsa1/3546619.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546619.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546620.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546620.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546621.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546621.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546622.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546622.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546617.webp"

    //producto3
    if (ruta.includes('/img/ImgVersiones/zapato1/2999292.webp'))
      aux.src = "/img/ImgVersiones/zapato1/2999293.webp"
    else if (ruta.includes('/img/ImgVersiones/zapato1/2999293.webp'))
      aux.src = "/img/ImgVersiones/zapato1/2999294.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999294.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999295.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999295.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999296.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999296.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999292.webp"

    //Bolsa flores
    if (ruta.includes('/img/bag-6877063.jpg'))
      aux.src = "/img/bag-6877173.jpg"
    else if (ruta.includes('/img/bag-6877173.jpg'))
      aux.src = "/img/bag-6877063.jpg"

    //tacones negros
    if (ruta.includes('/img/model-5660215.jpg'))
      aux.src = "/img/shoes-6563505.jpg"
    else if (ruta.includes('/img/shoes-6563505.jpg'))
      aux.src = "/img/shoes-4379449.jpg"
    else if (ruta.includes("/img/shoes-4379449.jpg"))
      aux.src = "/img/shoes-848064.jpg"
    else if (ruta.includes("/img/shoes-848064.jpg"))
      aux.src = "/imgstairs-921252.jpg"
    else if (ruta.includes("/img/stairs-921252.jpg"))
      aux.src = "/img/model-5660215.jpg"


    //Bolsa Cafe
    if (ruta.includes('/img/person-3339153.jpg'))
      aux.src = "/img/bag-1854148.jpg"
    else if (ruta.includes('/img/bag-1854148.jpg'))
      aux.src = "/img/person-3339153.jpg"

    //Bolsa lobo
    if (ruta.includes('/img/images.jpg'))
      aux.src = "/img/lobo__puss_in_boots_2_.jpg"
    else if (ruta.includes('/img/lobo__puss_in_boots_2_.jpg'))
      aux.src = "/img/images.jpg"

  }

  function versiguiente1() {
    var aux = document.getElementById("producto1")
    var ruta = aux.src
    //Producto 3
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251087.jpg"
  }

  function versiguiente2() {
    var aux = document.getElementById("producto2")
    var ruta = aux.src
    //Producto 3
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251087.jpg"
  }

  function versiguiente3() {
    var aux = document.getElementById("producto3")
    var ruta = aux.src
    //Producto 3
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251087.jpg"
  }

  function versiguiente4() {
    var aux = document.getElementById("producto4")
    var ruta = aux.src
    //Producto 3
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251087.jpg"
  }


  function veratras() {
    var aux = document.getElementById("producto")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251084.jpg'))
      aux.src = "/img/handbags-2251083.jpg"
    else if (ruta.includes('/img/handbags-2251085.jpg'))
      aux.src = "/img/handbags-2251084.jpg"
    else if (ruta.includes("/img/handbags-2251083.jpg"))
      aux.src = "/img/handbags-2251085.jpg"

    //producto 2
    if (ruta.includes('/img/ImgVersiones/bolsa1/3546617.webp'))
      aux.src = "/img/ImgVersiones/bolsa1/3546622.webp"
    else if (ruta.includes('/img/ImgVersiones/bolsa1/3546618.webp'))
      aux.src = "/img/ImgVersiones/bolsa1/3546617.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546619.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546618.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546620.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546619.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546621.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546620.webp"
    else if (ruta.includes("/img/ImgVersiones/bolsa1/3546622.webp"))
      aux.src = "/img/ImgVersiones/bolsa1/3546621.webp"

    //producto 3
    if (ruta.includes('/img/ImgVersiones/zapato1/2999292.webp'))
      aux.src = "/img/ImgVersiones/zapato1/2999296.webp"
    else if (ruta.includes('/img/ImgVersiones/zapato1/2999293.webp'))
      aux.src = "/img/ImgVersiones/zapato1/2999292.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999294.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999293.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999295.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999294.webp"
    else if (ruta.includes("/img/ImgVersiones/zapato1/2999296.webp"))
      aux.src = "/img/ImgVersiones/zapato1/2999295.webp"

    //Bolsa flores
    if (ruta.includes('/img/bag-6877063.jpg'))
      aux.src = "/img/bag-6877173.jpg"
    else if (ruta.includes('/img/bag-6877173.jpg'))
      aux.src = "/img/bag-6877063.jpg"

    //tacones negros
    if (ruta.includes('/img/model-5660215.jpg'))
      aux.src = "/img/stairs-921252.jpg"
    else if (ruta.includes('/img/shoes-6563505.jpg'))
      aux.src = "/img/model-5660215.jpg"
    else if (ruta.includes("/img/shoes-4379449.jpg"))
      aux.src = "/img/shoes-6563505.jpg"
    else if (ruta.includes("/img/shoes-848064.jpg"))
      aux.src = "/img/shoes-4379449.jpg"
    else if (ruta.includes("/img/stairs-921252.jpg"))
      aux.src = "/img/shoes-848064.jpg"

    //Bolsa Cafe
    if (ruta.includes('/img/person-3339153.jpg'))
      aux.src = "/img/bag-1854148.jpg"
    else if (ruta.includes('/img/bag-1854148.jpg'))
      aux.src = "/img/person-3339153.jpg"

    //Bolsa lobo
    if (ruta.includes('/img/images.jpg'))
      aux.src = "/img/lobo__puss_in_boots_2_.jpg"
    else if (ruta.includes('/img/lobo__puss_in_boots_2_.jpg'))
      aux.src = "/img/images.jpg"
  }

  function veratras1() {
    var aux = document.getElementById("producto1")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251087.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
  }

  function veratras2() {
    var aux = document.getElementById("producto2")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251087.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
  }

  function veratras3() {
    var aux = document.getElementById("producto3")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251087.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
  }

  function veratras4() {
    var aux = document.getElementById("producto4")
    var ruta = aux.src
    if (ruta.includes('/img/handbags-2251087.jpg'))
      aux.src = "/img/handbags-2251092.jpg"
    else if (ruta.includes('/img/handbags-2251088.jpg'))
      aux.src = "/img/handbags-2251087.jpg"
    else if (ruta.includes("/img/handbags-2251089.jpg"))
      aux.src = "/img/handbags-2251088.jpg"
    else if (ruta.includes("/img/handbags-2251090.jpg"))
      aux.src = "/img/handbags-2251089.jpg"
    else if (ruta.includes("/img/handbags-2251092.jpg"))
      aux.src = "/img/handbags-2251090.jpg"
  }










  var btn = document.getElementById("mostrar")
  btn.addEventListener("click", mostrar)
  var btn = document.getElementById("mostrar1")
  btn.addEventListener("click", mostrar1)
  var btn = document.getElementById("mostrar2")
  btn.addEventListener("click", mostrar2)
  var btn = document.getElementById("mostrar3")
  btn.addEventListener("click", mostrar3)
  var btn = document.getElementById("mostrar4")
  btn.addEventListener("click", mostrar4)
  var btn = document.getElementById("mostrar5")
  btn.addEventListener("click", mostrar5)
  var btn = document.getElementById("mostrar6")
  btn.addEventListener("click", mostrar6)
  var btn = document.getElementById("mostrar7")
  btn.addEventListener("click", mostrar7)
  var btn = document.getElementById("mostrar8")
  btn.addEventListener("click", mostrar8)
  var btn = document.getElementById("mostrar9")
  btn.addEventListener("click", mostrar9)
  var btn = document.getElementById("mostrar10")
  btn.addEventListener("click", mostrar10)
  var btn = document.getElementById("mostrar11")
  btn.addEventListener("click", mostrar11)
  var btn = document.getElementById("mostrar12")
  btn.addEventListener("click", mostrar12)

  //codigo practica 7
  function mostrar() {
    var texto = document.getElementById("datos")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar1() {
    var texto = document.getElementById("datos1")
    texto.innerHTML = "<ul> <li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar2() {
    var texto = document.getElementById("datos2")
    texto.innerHTML = "<ul> <li>Lorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar3() {
    var texto = document.getElementById("datos3")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar4() {
    var texto = document.getElementById("datos4")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar5() {
    var texto = document.getElementById("datos5")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar6() {
    var texto = document.getElementById("datos6")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar7() {
    var texto = document.getElementById("datos7")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar8() {
    var texto = document.getElementById("datos8")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar9() {
    var texto = document.getElementById("datos9")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }

  function mostrar10() {
    var texto = document.getElementById("datos10")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }
  function mostrar11() {
    var texto = document.getElementById("datos11")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }
  function mostrar12() {
    var texto = document.getElementById("datos12")
    texto.innerHTML = "<ul> <liLorem ipsum dolor sit amet</li><li>Lorem ipsum dolor sit amet</li></ul>"
    var instrucciones = document.createElement("li")
    instrucciones.innerHTML = "Lorem ipsum dolor sit amet"
    texto.appendChild(instrucciones)

    if (texto.style.display === "none") {
      texto.style.display = "block"
    } else {
      texto.style.display = "none"
    }

  }





  //codigo para cambiar de color una imagen
  document.getElementById("verde").addEventListener("click", function () { cambiarimagen(this) })
  document.getElementById("cafe").addEventListener("click", function () { cambiarimagen(this) })
  document.getElementById("coral").addEventListener("click", function () { cambiarimagen(this) })

  function cambiarimagen(objeto) {

    var doc = document.getElementById("imgcolors")
    switch (objeto.id) {
      case 'verde':
        doc.src = "img/tarjetas/tenis verdes gris.jpg"
        break
      case 'cafe':
        doc.src = "img/tarjetas/tenis cafes.jpg"
        break
      case 'coral':
        doc.src = "img/tarjetas/tenis coral.jpeg"
        break
    }

  }

  document.getElementById("chico1").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano1").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("largo1").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("mediano2").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("largo3").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("chico4").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano4").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("chico5").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano5").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("chico6").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano6").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("chico7").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano7").addEventListener("click", function () { cambioPrecio(this) })

  document.getElementById("chico8").addEventListener("click", function () { cambioPrecio(this) })
  document.getElementById("mediano8").addEventListener("click", function () { cambioPrecio(this) })

  function cambioPrecio(objeto) {
    switch (objeto.id) {

      case 'chico1':
        precio1.innerHTML = "$199"
        preciod1.innerHTML = "$299"
        aviso1.innerHTML = "En stock ✔️"
        aviso1.style.color = "green"
        break

      case 'mediano1':
        precio1.innerHTML = "$299"
        preciod1.innerHTML = "$399"
        aviso1.innerHTML = "Ultima pieza disponible !"
        aviso1.style.color = "red"
        break
      case 'largo1':
        precio1.innerHTML = "$399"
        preciod1.innerHTML = "$499"
        aviso1.style.color = "green"
        aviso1.innerHTML = "En stock ✔️"
        break

      case 'mediano2':
        precio2.innerHTML = "$499"
        preciod2.innerHTML = "$599"
        aviso2.style.color = "green"
        aviso2.innerHTML = "En stock ✔️"
        break

      case 'largo3':
        precio3.innerHTML = "$599"
        preciod3.innerHTML = "$699"
        aviso3.innerHTML = "Ultima pieza disponible !"
        aviso3.style.color = "red"
        break

      case 'chico4':
        precio4.innerHTML = "$699"
        preciod4.innerHTML = "$799"
        aviso4.style.color = "green"
        aviso4.innerHTML = "En stock ✔️"
        break
      case 'mediano4':
        precio4.innerHTML = "$799"
        preciod4.innerHTML = "$899"
        aviso4.style.color = "green"
        aviso4.innerHTML = "En stock ✔️"
        break

      case 'chico5':
        precio5.innerHTML = "$899"
        preciod5.innerHTML = "$999"
        aviso5.innerHTML = "Ultima pieza disponible !"
        aviso5.style.color = "red"
        break
      case 'mediano5':
        precio5.innerHTML = "$999"
        preciod5.innerHTML = "$1,099"
        aviso5.style.color = "green"
        aviso5.innerHTML = "En stock ✔️"
        break
      case 'chico6':
        precio6.innerHTML = "$1,099"
        preciod6.innerHTML = "$1,199"
        aviso6.style.color = "green"
        aviso6.innerHTML = "En stock ✔️"
        break
      case 'mediano6':
        precio6.innerHTML = "$1,199"
        preciod6.innerHTML = "$1,299"
        aviso6.style.color = "green"
        aviso6.innerHTML = "En stock ✔️"
        break

      case 'chico7':
        precio7.innerHTML = "$1,299"
        preciod7.innerHTML = "$1,399"
        aviso7.innerHTML = "Ultima pieza disponible !"
        aviso7.style.color = "red"
        break
      case 'mediano7':
        precio7.innerHTML = "$1,399"
        preciod7.innerHTML = "$1,499"
        aviso7.innerHTML = "Ultima pieza disponible !"
        aviso7.style.color = "red"
        break

      case 'chico8':
        precio8.innerHTML = "$1,099"
        preciod8.innerHTML = "$1,199"
        aviso8.style.color = "green"
        aviso8.innerHTML = "En stock ✔️"
        break
      case 'mediano8':
        precio8.innerHTML = "$1,199"
        preciod8.innerHTML = "$1,299"
        aviso8.innerHTML = "Ultima pieza disponible !"
        aviso8.style.color = "red"
        break

      default:


    }
  }

}


const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  // Mover la página al inicio con una animación suave
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  backToTopButton.style.transitionTimingFunction = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
});


document.getElementById("minus").addEventListener("click", function () { disminuir(this) })
document.getElementById("plus").addEventListener("click", function () { aumentar(this) })

function aumentar() {
  var numero = document.getElementById("numero")
  var num = numero.value
  num++
  numero.value = num

  if (num >= numero.max) {
    alert("No se pueden agregar más de " + numero.max + " articulos")
    numero.value = numero.max
  }
}


function disminuir() {
  var numero = document.getElementById("numero")
  var num = numero.value
  if (num <= numero.min) {
    numero.value = numero.min
    alert("no puede agregar menos de " + numero.min + " articulo")
  } else {
    num--
  }

  numero.value = num
}


/*
// Obtener el botón y la ventana sobrepuesta
var boton = document.getElementById("ver-detalles");
var ventanaSobrepuesta = document.getElementById("ventana-sobrepuesta");

// Agregar un evento clic al botón
boton.addEventListener("click", function () {
  // Mostrar la ventana sobrepuesta
  ventanaSobrepuesta.style.display = "block";
  deshabilitarScroll();
});


// Ocultar la ventana sobrepuesta cuando se hace clic fuera de ella
window.addEventListener("click", function (event) {
  if (event.target == ventanaSobrepuesta) {
    ventanaSobrepuesta.style.display = "none";
    habilitarScroll();
  }
});

// Ocultar la ventana sobrepuesta cuando se presiona la tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    ventanaSobrepuesta.style.display = "none";
    habilitarScroll();
  }
});



// Deshabilitar el scroll de la página cuando se muestra la ventana sobrepuesta
function deshabilitarScroll() {
  document.body.style.overflow = "hidden";
}

// Habilitar el scroll de la página cuando se oculta la ventana sobrepuesta
function habilitarScroll() {
  document.body.style.overflow = "auto";
}
*/



