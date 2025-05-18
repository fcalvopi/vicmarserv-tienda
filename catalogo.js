
const productos = [
  {
    nombre: "Reloj Inteligente",
    precio: 35,
    imagen: "assets/reloj.jpg"
  },
  {
    nombre: "Lámpara LED Táctil",
    precio: 20,
    imagen: "assets/lampara.jpg"
  },
  {
    nombre: "Organizador de Maquillaje",
    precio: 18,
    imagen: "assets/maquillaje.jpg"
  }
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(prod => {
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
  contenedor.appendChild(div);
});
