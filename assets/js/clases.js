//Grupal 1 Modulo 4

class Importacion {
  #idImportacion;
  #producto;
  #numeroProductos;
  #precioUnitario;
  constructor(idImportacion, producto, numeroProductos, precioUnitario) {
    this.#idImportacion = idImportacion;
    this.#producto = producto;
    this.#numeroProductos = numeroProductos;
    this.#precioUnitario = precioUnitario;
  }

  get idImportacion() {
    return this.#idImportacion;
  }

  get producto() {
    return this.#producto;
  }

  set producto(producto) {
    this.#producto = producto;
  }

  get numeroProductos() {
    return this.#numeroProductos;
  }

  set numeroProductos(numeroProductos) {
    this.#numeroProductos = numeroProductos;
  }

  get precioUnitario() {
    return this.#precioUnitario;
  }

  set precioUnitario(precioUnitario) {
    this.#precioUnitario = precioUnitario;
  }

  calcularTotal() {
    return this.#numeroProductos * this.#precioUnitario;
  }
}

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
    this.#nombre;
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
    this.#importaciones.forEach(importacion => {
        total += importacion.calculartotal()
    });
    return total;
  }

  productosPorPrecio() {
    return this.#importaciones.reduce((total, importacion) =>{
        return total + importacion.numeroProductos * importacion.precioUnitario;
    }, 0)
  }
}

export { Importacion, Empresa };
