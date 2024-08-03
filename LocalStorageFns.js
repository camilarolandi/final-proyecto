/*Aplicacion de local storage para permanencia de los colores */ 

const COLOR_KEY = 'ColorTema'

export const obtenerColorTema = () => {
    return localStorage.getItem(COLOR_KEY) || 'default'
}

export const actualizarColorTema = (color) => {
    localStorage.setItem(COLOR_KEY, color)
}




/* 
FUNCIONES LOCAL STORAGE PARA CONTACTOS
import { MOOK_CONTACTOS } from "./Mook"
const MOOK = "MookContactos"

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