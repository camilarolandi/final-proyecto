import { MOOK_CONTACTOS } from "./Mook";


/* export const inicializarLocalStorage = () => {
  if (!localStorage.getItem('MookContactos')) {
    const mookString = JSON.stringify(MOOK_CONTACTOS);
    localStorage.setItem('MookContactos', mookString);
  }
};

export const obtenerContactos = (id_contacto) => {
  const contactosString = localStorage.getItem('MookContactos');
  return contactosString ? JSON.parse(contactosString) : [];
};


export const actualizarContactos = (contactos) => {
  const contactosString = JSON.stringify(contactos);
  localStorage.setItem('MookContactos', contactosString);
};


export const agregarContacto = (nuevoContacto) => {
  const contactos = obtenerContactos();
  contactos.push(nuevoContacto);
  actualizarContactos(contactos);
};


export const actualizarContacto = (contactoActualizado) => {
  const contactos = obtenerContactos();
  const index = contactos.findIndex(contacto => contacto.id === contactoActualizado.id);
  if (index !== -1) {
    contactos[index] = contactoActualizado;
    actualizarContactos(contactos);
  }
}; */




const COLOR_KEY = 'ColorTema'

export const obtenerColorTema = () => {
    return localStorage.getItem(COLOR_KEY) || 'default'
}

export const actualizarColorTema = (color) => {
    localStorage.setItem(COLOR_KEY, color)
}


/* export const obtenerContactos = (id_contacto) => {

} */

/* export const obtenerMook = () =>{
  return JSON.parse (localStorage.getItem(MOOK))
} */
/* const MOOK = "MookContactos"

export const guardarMook = (MOOK_CONTACTOS) => {
  localStorage.setItem(MOOK, JSON.stringify(MOOK_CONTACTOS))
}

export const obtenerMook = () =>{
  const JSON_mook = localStorage.getItem(MOOK)
  if(JSON_mook){
    return JSON.parse (JSON_mook)
  }
  else
  return JSON.parse (MOOK_CONTACTOS)
  }

const obtenerContactos = (id_contactos) => {
  const mook = obtenerMook
  return mook.contactos.find(contacto => contacto.id === Number(id_contactos))
}

export const nuevoContacto = (nuevo_contacto) => {
  const mook = obtenerMook
  mook.contactos.push(nuevo_contacto)
  guardarMook(MOOK_CONTACTOS)
}

 */
// Fms.js

/* const MOOK_KEY = "MookContactos";

// Función para guardar el arreglo de contactos en localStorage
export const guardarMook = (MOOK_CONTACTOS) => {
  localStorage.setItem(MOOK_KEY, JSON.stringify(MOOK_CONTACTOS));
};

// Función para obtener el arreglo de contactos desde localStorage o cargar MOOK_CONTACTOS si no hay nada en localStorage
export const obtenerMook = () => {
  const mook = localStorage.getItem(MOOK_KEY);
  return mook ? JSON.parse(mook) : MOOK_CONTACTOS;
};

// Función para añadir un nuevo contacto al arreglo y guardar en localStorage
export const nuevoContacto = (nuevo_contacto) => {
  let mook = obtenerMook();
  mook.push(nuevo_contacto);
  guardarMook(mook);
};
 */

// Fms.js



const MOOK_KEY = "MookContactos";


// Función para guardar el arreglo de contactos en localStorage
export const guardarMook = (MOOK_CONTACTOS) => {
  localStorage.setItem(MOOK_KEY, JSON.stringify(MOOK_CONTACTOS));
};

// Función para obtener el arreglo de contactos desde localStorage
export const obtenerMook = () => {
  const mook = localStorage.getItem(MOOK_KEY);
  return mook ? JSON.parse(mook) : MOOK_CONTACTOS; // Devuelve MOOK_CONTACTOS si no hay nada en localStorage
};

// Función para añadir un nuevo contacto al arreglo y guardar en localStorage
export const agregarNuevoContacto = (nuevo_contacto) => {
  let mook = obtenerMook();
  mook.push(nuevo_contacto);
  guardarMook(mook);
  return mook; // Devuelve el array actualizado
};
