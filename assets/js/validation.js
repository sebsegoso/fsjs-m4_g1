/**
 * Obtiene los datos del formulario y los agrupa en un objeto.
 * @returns {Object} - Los datos del formulario.
 */
export const getFormData = (formInputs = {}) => {
  const formData = {}; // Objeto para agrupar los valores del formulario

  for (let key in formInputs) {
    const input = document.getElementById(formInputs[key].inputId);
    console.assert(input, `input no encontrado id: ${formInputs[key].inputId}`, input)
    const inputType = formInputs[key].type;
    switch (inputType) {
      case "checkbox":
        formData[key] = input.checked;
        break;
      case "number":
        formData[key] = Number(input.value);
        break;
      default:
        formData[key] = input.value?.trim();
    }
  }

  return formData;
};

export function handleCheckbox(inputId) {
  return !!document.getElementById(inputId)?.checked;
}
/**
 * Valida el formulario.
 * @param {Object} form - Los datos del formulario.
 * @returns {boolean} - Verdadero si el formulario es válido, falso de lo contrario.
 */
export const validateForm = (form = {}, formInputs = {}) => {
  let valid = true;
  //   valida que campos no estén vacíos
  for (let fieldKey in formInputs) {
    const input = formInputs[fieldKey];
    if (input.required && !form[fieldKey]) {
      const helpTag = document.getElementById(input.helpId);
      if (!helpTag) {
        console.error(
          `Error, no se encuentra el elemento con id ${input.helpId}`
        );
      } else {
        helpTag.innerHTML = `Ingresa ${input.label}`;
      }
      valid = false;
    }
  }

  return valid;
};

export const clearHelpMessages = (formInputs) => {
    for (let key in formInputs) {
      const helpElement = document.getElementById(formInputs[key].helpId);
      if (!helpElement) return;
      helpElement.innerHTML = "";
    }
  };