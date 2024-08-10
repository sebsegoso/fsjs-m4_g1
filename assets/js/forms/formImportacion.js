import { getFormData, validateForm } from "../validation.js";
import { Importacion } from "../clases.js";

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
    helpId: "numeroProductosHelp",
    label: "numeroProductos",
    required: true,
    type: "number",
  },
  precioUnitario: {
    inputId: "precioUnitario",
    helpId: "precioUnitarioHelp",
    label: "precioUnitario",
    required: true,
    type: "number",
  },
};

let nextImportacionId = 1;

const submitForm = function (event) {
  event.preventDefault();
  const form = getFormData(formInputs);
  const isValid = validateForm(form, formInputs);

  if (!isValid) return;

  const importacion = new Importacion(
    nextImportacionId++,
    form.producto,
    form.numeroProductos,
    form.precioUnitario
  );
  console.log(importacion);
  console.log(`Importación creada con exito`);

  this.reset();
};

export { formInputs, submitForm };
