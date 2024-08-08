/*Aplicacion de local storage para permanencia de los colores */ 

const COLOR_KEY = 'ColorTema'

export const obtenerColorTema = () => {
    return localStorage.getItem(COLOR_KEY) || 'default'
}

export const actualizarColorTema = (color) => {
    localStorage.setItem(COLOR_KEY, color)
}




