import { submitForm as submitFormEmpresa } from "./forms/formEmpresa.js";
import { submitForm as submitFormImportacion } from "./forms/formImportacion.js";


document
  .getElementById("formEmpresa")
  .addEventListener("submit", submitFormEmpresa);

document
  .getElementById("formImportacion")
  .addEventListener("submit", submitFormImportacion);
