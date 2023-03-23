const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function fastAddEl(elTag, textContent, elClass, domPlace) {
  const element = document.createElement(elTag);
  element.textContent = textContent;
  element.classList.add(elClass);
  domPlace.appendChild(element);

  return true;
}

function main() {
  const listEl = document.querySelector(".lista");
  fastAddEl(
    "li",
    "Terminal: Desde donde interactuamos con la computadora a la hora de mover, crear, borrar archivos. Tambien puede puede cumplir la funcion de consola para interactuar con programas",
    "li",
    listEl
  );
  fastAddEl(
    "li",
    "node: Es una herramienta que interpreta JS para poder usarlo fuera del navegador",
    "li",
    listEl
  );
  fastAddEl(
    "li",
    "OOP: Object Oriented Programming es una forma de programar, se basa en el uso de Clases. Las clases se instancian en objetos con propiedades y metodos",
    "li",
    listEl
  );
  fastAddEl(
    "li",
    "typescript: Es un lenguaje de programacion tipado basado en JS",
    "li",
    listEl
  );
  fastAddEl(
    "li",
    "CSS: Es un lenguaje de diseño grafico, se puede usar para crear hojas de estilos con las cuales hacer que HTML se vea lindo",
    "li",
    listEl
  );
  fastAddEl(
    "li",
    "DOM: Es la representacion del documento HTML en forma de arbol. Es creado por el navegador cuando 'lee' el archivo HTML",
    "special",
    listEl
  );
}

main();
