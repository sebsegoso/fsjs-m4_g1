class Empresas {
  #empresas;

  constructor(idContainer, empresas = []) {
    this.id = idContainer;
    this.#empresas = empresas;
  }
  get empresas() {
    return this.#empresas;
  }
  set empresas(newEmpresas) {
    console.info(
      `Para setear las empresas usa los métodos agregarEmpresa, ...`
    );
  }
  printEmpresas(empresas) {
    const accordion = document.getElementById(this.id);
    if (!accordion) {
      throw new Error(
        "Debes agregar un id válido para renderizar el componente"
      );
    }

    // Limpiar el contenido actual
    accordion.innerHTML = "";

    // Iterar sobre las empresas y agregar su HTML al contenedor
    (empresas || this.#empresas).forEach((empresa) => {
      const accordionItem = empresa.getAccordionHTML();
      accordion.appendChild(accordionItem);
    });
  }

  selectorEmpresas() {
    const selector = document.getElementById('empresaImport');
    const placeholder = selector.querySelector('option[value=""]');
    selector.innerHTML = '';
    selector.appendChild(placeholder); 
  
    this.#empresas.forEach((empresa) => {
      console.log('empresa', empresa, empresa.idEmpresa);
        const option = document.createElement('option');
        option.value = empresa.idEmpresa;
        option.textContent = empresa.nombre;
        selector.appendChild(option);
    });
  }

  agregarEmpresa(empresa) {
    this.#empresas.push(empresa);
    this.selectorEmpresas()
    this.printEmpresas();
    return this.#empresas;
  }
}

export { Empresas };
