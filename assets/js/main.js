import { Empresas } from "./classes/empresas.js";
import {
  modalEmpresa,
  submitForm as submitFormEmpresa,
} from "./forms/formEmpresa.js";
import { submitForm as submitFormImportacion } from "./forms/formImportacion.js";

const empresas = new Empresas("accordionEmpresas");

// listeners
document.getElementById("btnEmpresa").addEventListener("click", () => {
  modalEmpresa.show();
});

document
  .getElementById("formEmpresa")
  .addEventListener("submit", function (event) {
    const empresa = submitFormEmpresa(event);
    if (!empresa) return;
    empresas.agregarEmpresa(empresa);
  });

document
  .getElementById("formImportacion")
  .addEventListener("submit", submitFormImportacion);
