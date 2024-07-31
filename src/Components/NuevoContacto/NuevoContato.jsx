
import React from 'react'
import "./nuevocontacto.css"
export const NuevoContacto = ({contactoNuevo,onCloseNvoContact}) => {

const handleSubmitNewContacto=(e) =>{
	e.preventDefault()
	const nuevoNombre= e.target.nombre.value
	const nuevoApellido = e.target.apellido.value
	const nuevoTelefono = e.target.telefono.value
	const nuevoThumbnail = e.target.thumbnail.value
    contactoNuevo(nuevoNombre,nuevoApellido,nuevoTelefono,nuevoThumbnail)
    e.target.reset()
	} 

	return (
		<div className='cont-form-nvo-contacto'>
			
			<form className='form-nvo-contacto' onSubmit={handleSubmitNewContacto} >
			<header className='form-contacto-header'>
				<button 
				className= "btn-contact-nvo" 
				onClick={onCloseNvoContact}> 
				<i className="bi bi-x-lg"></i>
				</button>
				<h2>Añadir nuevo contacto</h2>
			</header>
			
                <label>Nombre</label>
				<input className= "input-contact" type="text" name="nombre" id="nombre" placeholder='Nombre'/>
                <label>Apellido</label>
				<input className= "input-contact" type="text" name="apellido" id="apellido" placeholder='Apellido'/>
                <label>Telefono</label>
				<input className= "input-contact" type="text" name="telefono" id="telefono" placeholder='Telefono'/>
				<label>Foto</label>
				<input className= "input-contact" type="text" name="thumbnail" id="thumbnail" placeholder='https://www.myfoto.com'/>

				<div className='nvo-contacto-btns-inf'>
				<span>Confirmá e inicia una conversación</span>
				<button className= "btn-contact-nvo"  type='submit'><i className="bi bi-send"></i></button>
				</div>
				
			</form>
			
		</div>
	)
}

	
	
	