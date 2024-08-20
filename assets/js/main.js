import { Empresas } from "./classes/empresas.js";
import {
    formInputs as formInputsEmpresa,
  modalEmpresa,
  submitForm as submitFormEmpresa,
} from "./forms/formEmpresa.js";
import {
  submitForm as submitFormImportacion,
  handleButtonDisable,
  formInputs as formInputsImportacion,
} from "./forms/formImportacion.js";
import { initializeTooltips } from "./bootstrap.js";
import { renderFormInputs } from "./forms/renderInputs.js";

initializeTooltips();
// render forms
// renderFormInputs(formInputsEmpresa, "formEmpresa");
// renderFormInputs(formInputsImportacion, "formImportacion");


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


document
  .addEventListener('DOMContentLoaded', () => {
    const rubroSelect = document.getElementById('rubroEmpresa');

    fetch('assets/data/rubros.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
      })
      .then(rubros => {
        rubros.forEach(rubro => {
          const option = document.createElement('option');
          option.value = rubro.id;
          option.textContent = rubro.text;
          rubroSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Error al cargar la info', error);
      });
});

document.addEventListener('DOMContentLoaded', () => {
  const tipoProductoSelect = document.getElementById('tipoProducto');
  const form = document.getElementById('formImportacion');
  const productoInput = document.getElementById('producto');
  
  fetch('assets/data/tipos-producto.json')
    .then(response => response.json())
    .then(tipos => {
      tipos.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.id;
        option.textContent = tipo.text;
        tipoProductoSelect.appendChild(option);
      });
    })
    .catch(error => console.error('Error al cargar tipos de producto:', error));
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const tipoProducto = tipoProductoSelect.value;
    const producto = productoInput.value.trim();

    fetch('assets/data/prohibiciones.json')
      .then(response => response.json())
      .then(prohibiciones => {
        const prohibido = prohibiciones.prohibiciones_importacion.some(p => 
          producto.toLowerCase().includes(p.producto.toLowerCase())
        );
        
        if (prohibido) {
          alert('Este producto no se puede importar.');
        } else {
          alert('Este producto se puede importar.');
        }
      })
      .catch(error => console.error('Error al cargar prohibiciones:', error));
  });
});