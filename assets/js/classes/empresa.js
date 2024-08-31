class Empresa {
  #idEmpresa;
  #nombre;
  #rut;
  #rubro;
  #tamano;
  #importaciones;
  constructor(idEmpresa, nombre, rut, rubro, tamano) {
    this.#idEmpresa = idEmpresa;
    this.#nombre = nombre;
    this.#rut = rut;
    this.#rubro = rubro;
    this.#tamano = tamano;
    this.#importaciones = [];
  }

  get idEmpresa() {
    return this.#idEmpresa;
  }

  get nombre() {
    return this.#nombre;
  }

  get rut() {
    return this.#rut;
  }

  get rubro() {
    return this.#rubro;
  }

  get tamano() {
    return this.#tamano;
  }

  get importaciones() {
    return this.#importaciones;
  }

  set nombre(nuevoNombre) {
    this.#nombre.trim();
  }

  agregarImportacion(importacion) {
    this.#importaciones.push(importacion);
  }

  eliminarImportacion(importacionId) {
    this.#importaciones = this.#importaciones.filter(
      (imp) => imp.idImportacion != importacionId
    );
  }

  totalImportaciones() {
    let total = 0;
    this.#importaciones.forEach((importacion) => {
      total += importacion.calcularTotal();
    });
    return total;
  }

  productosPorPrecio() {
    return this.#importaciones.reduce((total, importacion) => {
      return total + importacion.numeroProductos * importacion.precioUnitario;
    }, 0);
  }

  getAccordionHTML() {
    const element = document.createElement("div");
    element.id = this.#idEmpresa;
    element.className = "accordion-item";

    const importacionesHTML = this.#importaciones.map(importacion => `
      <tr class="importacion-item">
        <td> ${importacion.idImportacion}</td>
        <td>${importacion.producto}</td>
        <td>${importacion.numeroProductos}</td>
        <td>${importacion.precioUnitario}</td>
        <td>${importacion.tipo}</td>
        <td>
          <button class="btn btn-danger btn-sm eliminar-importacion-btn" data-importacion-id="${importacion.idImportacion}">Eliminar</button>
        </td>
      </tr>
    `).join('');

    element.innerHTML = `
        <div class="accordion-header">
          <button class="accordion-button collapsed d-flex justify-content-between" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-${this.#idEmpresa}"
              aria-expanded="false"
              aria-controls="collapse-${this.#idEmpresa}"
          >
            <span class="me-2">${this.#nombre}</span>
            <div id="">
                <span data-bs-toggle="collapse" data-bs-target class="btn btn-sm btn-info total-importaciones-btn">Suma total importaciones</span>
                <span data-bs-toggle="collapse" data-bs-target class="btn btn-sm btn-info productos-por-precio-btn">Suma total por productos</span>
            </div> 
          </button>
        </div>
        <div id="collapse-${
          this.#idEmpresa
        }" class="accordion-collapse collapse" data-bs-parent="#accordionEmpresas">
            <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th>Importacion</th>
                  <th>Producto</th>
                  <th>Numero de Productos</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>Eliminar</th>
                  <p></p>
                </tr>
              </thead>
              <tbody>                
                ${importacionesHTML}            
              </tbody>
            </table>
            </div>
        </div>
    `;

    // Listener para el botón "Suma total importaciones"
    element
      .querySelector(".total-importaciones-btn")
      .addEventListener("click", () => {
        const total = this.totalImportaciones();
        alert(`El total de importaciones es: ${total}`);
      });

    // Listener para el botón "Suma total por productos"
    element
      .querySelector(".productos-por-precio-btn")
      .addEventListener("click", () => {
        const totalProductos = this.productosPorPrecio();
        alert(`El total por productos es: ${totalProductos}`);
      });
      // eliminar importacion
    element
      .querySelectorAll(".eliminar-importacion-btn")
      .forEach(button => {
        button.addEventListener("click", (event) => {
          console.log(event.target);
          const importacionId = button.getAttribute("data-importacion-id");
          this.eliminarImportacion(importacionId);
          console.log(`Importacion con ID ${importacionId} eliminada`);
          const row = button.closest("tr");
          !!row && row?.remove();
        });
      });

    return element;
  }
}

export { Empresa };
