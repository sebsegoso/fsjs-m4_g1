import { getFormData, validateForm } from "../validation.js";
import { Importacion } from "../classes/importacion.js";


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
