import { Empresas } from "./classes/empresas.js";
import {
  modalEmpresa,
  submitForm as submitFormEmpresa,
} from "./forms/formEmpresa.js";
import {
  submitForm as submitFormImportacion,
  handleButtonDisable,
} from "./forms/formImportacion.js";
import { initializeTooltips } from "./bootstrap.js";

initializeTooltips();

const empresas = new Empresas("accordionEmpresas");
// listeners
document.getElementById("btnEmpresa").addEventListener("click", () => {
  modalEmpresa.show();
});

document
  .getElementById("formEmpresa")
  .addEventListener("submit", function (event) {
    const empresa = submitFormEmpresa(event);
    console.log(empresa);
    if (!empresa) return;
    empresas.agregarEmpresa(empresa);
    handleButtonDisable(empresas.empresas);
  });

document
  .getElementById("formImportacion")
  .addEventListener("submit", function (event) {
    submitFormImportacion(event, empresas);
    empresas.printEmpresas();
  });

document.addEventListener("DOMContentLoaded", () => {
  const rubroSelect = document.getElementById("rubroEmpresa");

  fetch("assets/data/rubros.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then((rubros) => {
      rubros.forEach((rubro) => {
        const option = document.createElement("option");
        option.value = rubro.id;
        option.textContent = rubro.text;
        rubroSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error al cargar la info", error);
    });
});

document.addEventListener("DOMContentLoaded", async () => {
  const tipoProductoSelect = document.getElementById("tipoProducto");
  const form = document.getElementById("formImportacion");
  const productoInput = document.getElementById("producto");

  const tiposProducto = await fetch("assets/data/prohibiciones.json")
    .then((response) => response.json())
    .then((response) => response?.no_importable || [])
    .catch((error) => {
      console.error("Error al cargar tipos de producto:", error);
      return [];
    });

  tiposProducto.forEach((tipo, i) => {
    const option = document.createElement("option");
    option.value = tipo.producto;
    option.textContent = tipo.producto;
    tipoProductoSelect.appendChild(option);
  });

  tipoProductoSelect.addEventListener("change", function (event) {
    const { value } = event.target;
    const helpElement = document.getElementById("tipoProductoHelp");
    const helpText = tiposProducto.find((t) => t.producto === value)?.mensaje;

    helpElement.innerText = helpText;
  });
});
