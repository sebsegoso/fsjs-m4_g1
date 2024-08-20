import { getFormData, validateForm, clearHelpMessages } from "../validation.js";
import { Importacion } from "../classes/importacion.js";

const modalImportacion = new bootstrap.Modal(document.getElementById("modalImportacion"));
const formInputs = {
  producto: {
    inputId: "producto",
    helpId: "productoHelp",
    label: "producto",
    required: true,
    type: "text",
  },
  numeroProductos: {
    inputId: "numeroProductos",
    helpId: "cantidadHelp",
    label: "número de productos",
    required: true,
    type: "number",
  },
  precioUnitario: {
    inputId: "precioUnitario",
    helpId: "precioHelp",
    label: "precio unitario",
    required: true,
    type: "number",
  },
  selectEmpresaImport: {
    inputId: "empresaImport",
    helpId: "empresaImportHelp",
    label: "empresa que importa el producto",
    required: true,
    type: "select",
  },
};

let nextImportacionId = 1;

const submitForm = function (event, empresas) {
  event.preventDefault();
  clearHelpMessages(formInputs);

  const form = getFormData(formInputs);
  const isValid = validateForm(form, formInputs);

  if (!isValid) return;

  const importacion = new Importacion(
    nextImportacionId++,
    form.producto,
    form.numeroProductos,
    form.precioUnitario,
  );

  const empresaId = form.selectEmpresaImport
  const empresaInstancia = empresas.empresas.find(emp => emp.idEmpresa == empresaId)
  
  empresaInstancia.agregarImportacion(importacion)
  modalImportacion.hide();
  event.target.reset();
};

const handleButtonDisable = (empresas) => {
  const button = document.getElementById("btnImportacion")
  const tooltip = bootstrap.Tooltip.getInstance("#tooltipBtnImportacion")
  const tieneEmpresas = empresas.length > 0
  button.disabled = !tieneEmpresas
  tieneEmpresas ? tooltip.disable() : tooltip.enable()

}

export { formInputs, submitForm, modalImportacion, handleButtonDisable };


