import { MOOK_CONTACTOS } from "./Mook";


// Inicializa localStorage con MOOK_CONTACTOS si está vacío
export const inicializarLocalStorage = () => {
  if (!localStorage.getItem('MookContactos')) {
    const mookString = JSON.stringify(MOOK_CONTACTOS);
    localStorage.setItem('MookContactos', mookString);
  }
};

// Obtiene contactos desde localStorage
export const obtenerContactos = () => {
  const contactosString = localStorage.getItem('MookContactos');
  return contactosString ? JSON.parse(contactosString) : [];
};

// Actualiza contactos en localStorage
export const actualizarContactos = (contactos) => {
  const contactosString = JSON.stringify(contactos);
  localStorage.setItem('MookContactos', contactosString);
};

// Agrega un nuevo contacto
export const agregarContacto = (nuevoContacto) => {
  const contactos = obtenerContactos();
  contactos.push(nuevoContacto);
  actualizarContactos(contactos);
};

// Actualiza un contacto existente
export const actualizarContacto = (contactoActualizado) => {
  const contactos = obtenerContactos();
  const index = contactos.findIndex(contacto => contacto.id === contactoActualizado.id);
  if (index !== -1) {
    contactos[index] = contactoActualizado;
    actualizarContactos(contactos);
  }
};

// Agrega un mensaje a un contacto existente
export const agregarMensaje = (contactoId, nuevoMensaje) => {
  const contactos = obtenerContactos();
  const index = contactos.findIndex(contacto => contacto.id === contactoId);
  if (index !== -1) {
    const contacto = contactos[index];
    const mensaje = {
      author: "Yo",
      text: nuevoMensaje,
      estado: 'Visto',
      day: 'Hoy',
      hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      id: (contacto.mensajes.length + 1).toString()
    };
    contacto.mensajes.push(mensaje);
    contactos[index] = contacto;
    actualizarContactos(contactos);
  }
};
