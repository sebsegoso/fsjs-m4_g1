class Importacion {
  #idImportacion;
  #producto;
  #numeroProductos;
  #precioUnitario;
  #tipo;

  constructor(idImportacion, producto, numeroProductos, precioUnitario, tipo) {
    this.#idImportacion = idImportacion;
    this.#producto = producto;
    this.#numeroProductos = numeroProductos;
    this.#precioUnitario = precioUnitario;
    this.#tipo = tipo;
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

  get tipo() {
    return this.#tipo;
  }

  set tipo(tipo) {
    this.#tipo = tipo;
  }

  calcularTotal() {
    return this.#numeroProductos * this.#precioUnitario;
  }
}

export { Importacion };
