
const productos = [
  {
    nombre: "Reloj Inteligente",
    precio: 35,
    imagen: "assets/reloj.jpg",
    categoria: "Electrónica"
  },
  {
    nombre: "Auriculares Bluetooth",
    precio: 25,
    imagen: "assets/auriculares.jpg",
    categoria: "Electrónica"
  },
  {
    nombre: "Lámpara LED Táctil",
    precio: 20,
    imagen: "assets/lampara.jpg",
    categoria: "Electrónica"
  },
  {
    nombre: "Organizador de Maquillaje",
    precio: 18,
    imagen: "assets/maquillaje.jpg",
    categoria: "Cosméticos"
  },
  {
    nombre: "Perfume Floral",
    precio: 30,
    imagen: "assets/perfume.jpg",
    categoria: "Cosméticos"
  },
  {
    nombre: "Zapatillas Urbanas",
    precio: 45,
    imagen: "assets/zapatillas.jpg",
    categoria: "Zapatillas"
  }
];

const categorias = ["Electrónica", "Cosméticos", "Zapatillas"];
const contenedor = document.getElementById("lista-productos");

categorias.forEach(categoria => {
  const seccion = document.createElement("section");
  seccion.innerHTML = `<h2 style="text-align:center;color:#003366;">${categoria}</h2>`;

  const fila = document.createElement("div");
  fila.className = "productos";

  productos
    .filter(p => p.categoria === categoria)
    .forEach(prod => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio.toFixed(2)}</p>
        <button onclick="window.open('https://wa.me/593969054410?text=Hola,%20quiero%20comprar%20${encodeURIComponent(prod.nombre)}', '_blank')">
          Comprar por WhatsApp
        </button>
      `;
      fila.appendChild(div);
    });

  seccion.appendChild(fila);
  contenedor.appendChild(seccion);
});

