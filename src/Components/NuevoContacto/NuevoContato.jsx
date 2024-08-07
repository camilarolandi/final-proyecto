/* Fomulario para añadir nuevo contacto */
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

        const nuevoNombre = nombre
        const nuevoApellido = apellido
        const nuevoTelefono = telefono

        if (errorFns.nombre(nuevoNombre)) {
            setErrorNombre(errorsMje.nombre)
        } else {
            setErrorNombre('')
        }

        if (errorFns.apellido(nuevoApellido)) {
            setErrorApellido(errorsMje.apellido)
        } else {
            setErrorApellido('')
        }

        if (errorFns.telefono(nuevoTelefono)) {
            setErrorTelefono(errorsMje.telefono)
        } else {
            setErrorTelefono('')
        }

        if (nuevoNombre && nuevoApellido && nuevoTelefono &&
            !errorFns.nombre(nuevoNombre) && !errorFns.apellido(nuevoApellido) && !errorFns.telefono(nuevoTelefono)) {
            contactoNuevo(nuevoNombre, nuevoApellido, nuevoTelefono, thumbnail)
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
                < span style={{ color: "green", fontWeight: "bold", fontSize: "12px" }}> Si desea colocar una foto de perfil, el formato admitido es https://www.myfoto.com</span>
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
