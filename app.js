const d = document;
const $formulario = d.querySelector("#formulario");
const modal = d.getElementById("modal");
const resultados = d.getElementById("resultados_alumnos");
const inputs = d.querySelectorAll("input");
const close = d.querySelector(".close");

const botonActualizar = d.querySelector(".actualizar");
let alumnoOriginal; // vartiable para almacenar la copia del objeto
let salon = [];

//funcion para sacar los datos del formuolario con formData

const getData = () => {
  const datos = new FormData($formulario);
  const datosProcesados = Object.fromEntries(datos.entries());
  $formulario.reset();
  return datosProcesados;
};

//funcion para colorcar los datos en el servidor

const postData = async () => {
  const newUser = getData();

  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      const { nombre, codigo, nota_1, nota_2, nota_3 } = jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
};

$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  postData();
});
