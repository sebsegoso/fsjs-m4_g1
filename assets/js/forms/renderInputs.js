export function renderFormInputs(inputs, containerId) {
  // Obtiene el contenedor padre usando el id proporcionado
  const container = document.getElementById(containerId);

  // Recorre el objeto de inputs
  for (const key in inputs) {
    if (inputs.hasOwnProperty(key)) {
      const inputConfig = inputs[key];

      // Crea el div contenedor para cada input
      const div = document.createElement("div");
      div.className = "mb-3";

      // Crea el label
      const label = document.createElement("label");
      label.setAttribute("for", inputConfig.inputId);
      label.className = "form-label";
      label.textContent =
        inputConfig.label.charAt(0).toUpperCase() + inputConfig.label.slice(1);

      // Crea el input o select dependiendo del tipo
      let input;

      switch (inputConfig.type) {
        case "select":
          input = document.createElement("select");
          input.className = "form-select"; // Clase específica para select en Bootstrap
          inputConfig?.options?.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.value = option.value;
            optionElement.textContent = option.label;
            input.appendChild(optionElement);
          });
          break;

        case "checkbox":
        case "radio":
          input = document.createElement("input");
          input.type = inputConfig.type;
          input.className = "form-check-input"; // Clase para checkbox y radio en Bootstrap
          label.className = "form-check-label";
          div.className = "form-check mb-3";
          break;

        default:
          input = document.createElement("input");
          input.type = inputConfig.type;
          input.className = "form-control";
          input.placeholder = `Ingrese ${inputConfig.label}`;
      }

      input.required = inputConfig.required;
      input.id = inputConfig.inputId;

      // Añade el label antes o después dependiendo del tipo
      if (inputConfig.type === "checkbox" || inputConfig.type === "radio") {
        div.appendChild(input);
        div.appendChild(label);
      } else {
        div.appendChild(label);
        div.appendChild(input);
      }

      // Crea el div de ayuda si no es un checkbox o radio
      if (inputConfig.type !== "checkbox" && inputConfig.type !== "radio") {
        const helpDiv = document.createElement("div");
        helpDiv.id = inputConfig.helpId;
        helpDiv.className = "form-text text-danger";
        div.appendChild(helpDiv);
      }

      // Añade el div contenedor al contenedor padre
      container.appendChild(div);
    }
  }
}
