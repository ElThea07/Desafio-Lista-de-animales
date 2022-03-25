//SUPER CLASE PROPIETARIO
 class Propietario{
  constructor(nombre, direccion, telefono){
    this._nombre = nombre;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  //METODO QUE RETORNA DATOS DE PROPIETARIO
  datosPropietario(){
    return `El Nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono}`;
  }
}


//CLASE ANIMAL HIJO DE PROPIETARIO
class Animal extends Propietario{
  constructor(nombre,direccion,telefono,tipo){
    super(nombre,direccion,telefono);
    this._tipo = tipo;
  }

  //METODO PARA RETORNAR EL TIPO CON THIS._TIPO
  datosTipo(){
    return `El tipo de animal es un: ${this._tipo}`;
  }

  //GET TIPO
  get tipo(){
    return this._tipo;
  }
}


//CLASE MASCOTA HIJO DE ANIMAL NIETO DE PROPIETARIO
class Mascota extends Animal{
  constructor(nombre,direccion,telefono,tipo,nombreMascota, enfermedad){
    super(nombre,direccion,telefono,tipo);
    this._nombreMascota = nombreMascota;;
    this._enfermedad = enfermedad;
  }

  //METODO PARA RETORNAR NOMBRE DE MASCOTA Y LA ENFERMEDAD
  datosMascota(){
    return `mientras que el nombre de la mascota es: ${this._nombreMascota} y la enfermedad es: ${this._enfermedad}`;
  }
  //GET MASCOTA
  get nombreMascota(){
    return this._nombreMascota;
  }
  //SET MASCOTA
  set nombreMascota(newNombreMascota) {
    this._nombreMascota = newNombreMascota;
  }
  //GET ENFERMEDAD
  get enfermedad() {
    return this._enfermedad;
  }
  //SET ENFERMEDAD
  set enfermedad(newEnfermedad) {
    this._enfermedad = newEnfermedad;
  }
}
  
  //SELECCIONAMOS LOS INPUTS Y EL SELECT
  const propietarioId = document.querySelector("#propietario");
  const telefonoId = document.querySelector("#telefono");
  const direccionId = document.querySelector("#direccion");
  const nombreMascotaId = document.querySelector("#nombreMascota");
  const tipoId = document.querySelector("#tipo");
  const enfermedadId = document.querySelector("#enfermedad");
  const resultadoId = document.querySelector("#resultado");
  
  //SELECCIONAMOS EL BOTON
  const btnClass = document.querySelector(".btn");
  
  
  //EVENTO CLICK DEL BOTON
  btnClass.addEventListener("click", (e) => {
    e.preventDefault();
  
    //OBTENEMOS VALORES DE LOS INPUT
    const nombre = propietarioId.value;
    const telefono = telefonoId.value;
    const direccion = direccionId.value;
    const nombreMascota = nombreMascotaId.value;
    const tipo = tipoId.value;
    const enfermedad = enfermedadId.value;
  
    //MASCOTA HIJO DE ANIMAL NIETO DE PROPIETARIO LE ASIGNAMOS EL CONTENIDO, SE AGREGAN TODAS LAS PROPIEDADES A LA SUBCLASE MAS INFERIOR
    const mascota = new Mascota(nombre,direccion,telefono,tipo,nombreMascota,enfermedad);
  
    //IMPRIMIMOS EL CONTENIDO
    resultadoId.innerHTML = `
      <ul style="border: solid #CED4DA 2px; padding: 20px; box-shadow: #E8F0FE 0px 9px 9px 1px;">
        <li>${mascota.datosPropietario()}</li>  
        <li>${mascota.datosTipo()}, ${mascota.datosMascota()}</li>
      </ul>`;
  });