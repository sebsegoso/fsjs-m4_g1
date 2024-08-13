class Empresa {
  #idEmpresa;
  #nombre;
  #rut;
  #importaciones;
  constructor(idEmpresa, nombre, rut) {
    this.#idEmpresa = idEmpresa;
    this.#nombre = nombre;
    this.#rut = rut;
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
      total += importacion.calculartotal();
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
                <span data-bs-toggle="collapse" data-bs-target class="btn btn-sm btn-success agregar-importacion-btn">Agregar importación</span>
                <span data-bs-toggle="collapse" data-bs-target class="btn btn-sm btn-info total-importaciones-btn">Suma total importaciones</span>
                <span data-bs-toggle="collapse" data-bs-target class="btn btn-sm btn-info productos-por-precio-btn">Suma total por productos</span>
            </div> 
          </button>
        </div>
        <div id="collapse-${
          this.#idEmpresa
        }" class="accordion-collapse collapse" data-bs-parent="#accordionEmpresas">
            <div class="accordion-body">
            ${this.#rut}
            </div>
        </div>
    `;

    // Agregar listeners a los botones

    // Listener para el botón "Agregar importación"
    element
      .querySelector(".agregar-importacion-btn")
      .addEventListener("click", () => {
        alert(`importacion a ${this.#nombre}`);
      });

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

    return element;
  }
}

export { Empresa };
