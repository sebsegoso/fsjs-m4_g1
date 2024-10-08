import { clearHelpMessages, getFormData, validateForm } from "../validation.js";
import { Empresa } from "../classes/empresa.js";
import { validaRut } from "../regex.js";

const modalEmpresa = new bootstrap.Modal(
  document.getElementById("modalEmpresa")
);
const formInputs = {
  rutEmpresa: {
    inputId: "rutEmpresa",
    helpId: "rutHelp",
    label: "rut de la empresa",
    required: true,
    type: "text",
  },
  nombreEmpresa: {
    inputId: "nombreEmpresa",
    helpId: "nombreHelp",
    label: "nombre de la empresa",
    required: true,
    type: "text",
  },
  rubroEmpresa: {
    inputId: "rubroEmpresa",
    helpId: "rubroHelp",
    label: "rubro de la empresa",
    required: true,
    type: "text",
  },
  tamanoEmpresa: {
    inputId: "tamanoEmpresa",
    helpId: "tamanoHelp",
    label: "Tamaño de importación",
    required: true,
    type: "select",
    options: [
      { value: "sm", label: "Pequeña" },
      { value: "md", label: "Mediana" },
      { value: "lg", label: "Grande" },
    ],
  },
};

let nextEmpresaId = 1;

const submitForm = function (event) {
  event.preventDefault();
  clearHelpMessages(formInputs);

  const form = getFormData(formInputs);

  const isValid = validateForm(form, formInputs);

  const rutValido = validaRut(form.rutEmpresa);
  if (!rutValido) {
    document.getElementById(formInputs.rutEmpresa.helpId).innerText =
      "RUT Invalido";
    return;
  }

  if (!isValid) return;

  const empresa = new Empresa(
    nextEmpresaId++,
    form.nombreEmpresa,
    form.rutEmpresa,
    form.rubroEmpresa,
    form.tamanoEmpresa
  );
  console.log(empresa);
  console.log(`Empresa ${empresa.nombre} creada con exito`);
  modalEmpresa.hide();
  event.target.reset();
  return empresa;
};

export { formInputs, submitForm, modalEmpresa };
