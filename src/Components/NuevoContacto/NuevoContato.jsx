/* import React, { useState } from 'react'
import "./nuevocontacto.css"
import '../../styles.css'
import { errorsMje, errorFns } from '../../../erroresValidacion'

export const NuevoContacto = ({ contactoNuevo, onCloseNvoContact}) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const [errorNombre, setErrorNombre] = useState('')
    const [errorApellido, setErrorApellido] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')
    const [errorThumbnail, setErrorThumbnail] = useState('')

    const handleSubmitNewContacto = (e) => {
        e.preventDefault()

        const nuevoNombre = nombre
        const nuevoApellido = apellido
        const nuevoTelefono = telefono
        const nuevoThumbnail = thumbnail

        setErrorNombre(errorFns.nombre(nuevoNombre) && errorsMje.nombre)
        setErrorApellido(errorFns.apellido(nuevoApellido) && errorsMje.apellido)
        setErrorTelefono(errorFns.telefono(nuevoTelefono) && errorsMje.telefono)
        setErrorThumbnail(errorFns.thumbnail(nuevoThumbnail) && errorsMje.thumbnail)

        if (!errorFns.nombre(nuevoNombre) && !errorFns.apellido(nuevoApellido) && !errorFns.telefono(nuevoTelefono) && !errorFns.thumbnail(nuevoThumbnail)) {
            contactoNuevo(nuevoNombre, nuevoApellido, nuevoTelefono, nuevoThumbnail)
            setNombre('')
            setApellido('')
            setTelefono('')
            setThumbnail('')
        }
    }

    return (
        <form className='form-nvo-contacto' onSubmit={handleSubmitNewContacto}>
            <h2 className='nuevo-contacto-tittle'>Añadir nuevo contacto</h2>
            <div className="form-input-contenedor">
                <label className='label-contact'>Nombre</label>
                <input
                    className="input-contact"
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder='Nombre'
                />
                {errorNombre && <span className="error-message">{errorNombre}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Apellido</label>
                <input
                    className="input-contact"
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder='Apellido'
                />
                {errorApellido && <span className="error-message">{errorApellido}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Teléfono</label>
                <input
                    className="input-contact"
                    type="text"
                    name="telefono"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder='Teléfono'
                />
                {errorTelefono && <span className="error-message">{errorTelefono}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Foto</label>
                <input
                    className="input-contact"
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    placeholder='https://www.myfoto.com'
                />
                {errorThumbnail && <span className="error-message">{errorThumbnail}</span>}
            </div>
            <div className='nvo-contacto-btns-inf'>
                <span className='texto-bottom'>¡Confirmá e inicia una conversación!</span>
                <div className='cont-contact-nvo'>
                    <button className="btn-contact-nvo" type='submit'>Añadir contacto</button>
                    <button className="btn-contact-nvo" onClick={onCloseNvoContact}>Cancelar</button>
                </div>
            </div>
        </form>
    )
}
	 */

import React, { useState } from 'react'
import "./nuevocontacto.css"
import '../../styles.css'
import { errorsMje, errorFns } from '../../../erroresValidacion'

export const NuevoContacto = ({ contactoNuevo, onCloseNvoContact }) => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [thumbnail, setThumbnail] = useState('')

    const [errorNombre, setErrorNombre] = useState('')
    const [errorApellido, setErrorApellido] = useState('')
    const [errorTelefono, setErrorTelefono] = useState('')

    const handleSubmitNewContacto = (e) => {
        e.preventDefault()

        const nuevoNombre = nombre.trim()
        const nuevoApellido = apellido.trim()
        const nuevoTelefono = telefono.trim()

        setErrorNombre(errorFns.nombre(nuevoNombre) ? errorsMje.nombre : '')
        setErrorApellido(errorFns.apellido(nuevoApellido) ? errorsMje.apellido : '')
        setErrorTelefono(errorFns.telefono(nuevoTelefono) ? errorsMje.telefono : '')

        // Validar que nombre, apellido y telefono no tengan errores y estén llenos
        if (nuevoNombre && nuevoApellido && nuevoTelefono &&
            !errorFns.nombre(nuevoNombre) && !errorFns.apellido(nuevoApellido) && !errorFns.telefono(nuevoTelefono)) {
            // Llamar a contactoNuevo con todos los campos
            contactoNuevo(nuevoNombre, nuevoApellido, nuevoTelefono, thumbnail)
            // Limpiar los campos después del envío exitoso
            setNombre('')
            setApellido('')
            setTelefono('')
            setThumbnail('')
        }
    }

    return (
        <form className='form-nvo-contacto' onSubmit={handleSubmitNewContacto}>
            <h2 className='nuevo-contacto-tittle'>Añadir nuevo contacto</h2>
            <div className="form-input-contenedor">
                <label className='label-contact'>Nombre</label>
                <input
                    className="input-contact"
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder='Nombre'
                />
                {errorNombre && <span className="error-message">{errorNombre}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Apellido</label>
                <input
                    className="input-contact"
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder='Apellido'
                />
                {errorApellido && <span className="error-message">{errorApellido}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Teléfono</label>
                <input
                    className="input-contact"
                    type="text"
                    name="telefono"
                    id="telefono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder='Teléfono'
                />
                {errorTelefono && <span className="error-message">{errorTelefono}</span>}
            </div>

            <div className="form-input-contenedor">
                <label className='label-contact'>Foto</label>
                <input
                    className="input-contact"
                    type="text"
                    name="thumbnail"
                    id="thumbnail"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                    placeholder='https://www.myfoto.com'
                />
                <span style={{color:"green", fontWeight:"bold", fontSize:"12px"}}> Si desea colocar una foto de perfil, el formato admitido es https://www.myfoto.com</span>
            </div>

            <div className='nvo-contacto-btns-inf'>
                <span className='texto-bottom'>¡Confirmá e inicia una conversación!</span>
                <div className='cont-contact-nvo'>
                    <button className="btn-contact-nvo" type='submit'>Añadir contacto</button>
                    <button className="btn-contact-nvo" onClick={onCloseNvoContact}>Cancelar</button>
                </div>
            </div>
        </form>
    )
}
