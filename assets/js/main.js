import { Empresas } from "./classes/empresas.js";
import {
  modalEmpresa,
  submitForm as submitFormEmpresa,
} from "./forms/formEmpresa.js";
import { submitForm as submitFormImportacion, handleButtonDisable } from "./forms/formImportacion.js";
import { initializeTooltips } from "./bootstrap.js"

initializeTooltips()
const empresas = new Empresas("accordionEmpresas");

// listeners
document.getElementById("btnEmpresa").addEventListener("click", () => {
  modalEmpresa.show();
});

document
  .getElementById("formEmpresa")
  .addEventListener("submit", function (event) {
    const empresa = submitFormEmpresa(event);
    console.log(empresa)
    if (!empresa) return;
    empresas.agregarEmpresa(empresa);
    handleButtonDisable(empresas.empresas)
  });

document
  .getElementById("formImportacion")
  .addEventListener("submit", function (event) {
    submitFormImportacion(event, empresas)
    empresas.printEmpresas()
  });
