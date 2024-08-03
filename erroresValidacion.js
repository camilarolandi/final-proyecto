export const errorFns = {
    nombre: (valorInputIngresado) => {
        return !valorInputIngresado
    },
    apellido: (valorInputIngresado) => {
        return !valorInputIngresado
    },
    telefono: (valorInputIngresado) => {
        const telefonoValido = valorInputIngresado
        return isNaN(telefonoValido) || telefonoValido.length !== 9
    },
    thumbnail: (valorInputIngresado) => {
        return !valorInputIngresado || !valorInputIngresado.startsWith('http')
    }
    }

    export const errorsMje = {
    nombre: 'Ingrese un nombre válido',
    apellido: 'Ingrese un apellido válido',
    telefono: 'Ingrese un número de teléfono válido, debe contener 9 dígitos',
    }