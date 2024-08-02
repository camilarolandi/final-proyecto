/* funciona :) */
import React from 'react'
import "./nvomje.css"
import '../../styles.css'

export const NuevoMje = ({enviarMensaje,colorTema}) => {
	const handleSubmitNewMensaje =(e) =>{
		e.preventDefault()
		const nuevoMensaje = e.target.mensaje.value
        enviarMensaje(nuevoMensaje)
        e.target.reset()
	}

	return (

		<div className={`form-mje-enviar ${colorTema}`}>
			<form className='formulario' onSubmit= {handleSubmitNewMensaje}>
                <div className='emoji-container'>
                    <i className="smile bi bi-emoji-smile"></i>
                    <i className=" bi bi-plus-lg"></i>
                </div>
				<input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
				<button className= "btn" type='submit'><i className="btn bi bi-send"></i></button> 
                <i className=" emoji bi bi-mic-fill"></i>

			</form>
		</div>
	)
}





