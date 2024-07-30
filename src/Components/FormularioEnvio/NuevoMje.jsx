/* funciona :) */
import React from 'react'
import "./nvomje.css"
import '../../styles.css'



export const NuevoMje = ({enviarMensaje}) => {
	const handleSubmitNewMensaje =(e) =>{
		e.preventDefault()
		const nuevoMensaje = e.target.mensaje.value
        enviarMensaje(nuevoMensaje)
        e.target.reset()
	}

	return (
		<div className='form-mje-enviar'>
			<form className='formulario' onSubmit= {handleSubmitNewMensaje}>
                <div className='emoji-container'>
                    <i className="smile bi bi-emoji-smile"></i>
                    <i className=" bi bi-plus-lg"></i>
                </div>
				<input className= "input-texto" type="text" name="mensaje" id="mensaje" placeholder='Mensaje'/>
				<button className= "btn" type='submit'><i className="bi bi-send"></i></button> 
                <i className=" emoji bi bi-mic-fill"></i>

			</form>
		</div>
	)
}





/* funciona pero no lo comprendo */
/* import React, { useRef } from 'react';
import "./nvomje.css";

export const NuevoMje = ({ enviarMensaje }) => {
    const mensajeRef = useRef(null);

    const handleSubmitNewMensaje = (e) => {
        e.preventDefault();
        const nuevoMensaje = mensajeRef.current.value;
        enviarMensaje(nuevoMensaje);

        mensajeRef.current.value = '';
    };

    return (
        <div className='form-mje-enviar'>
            <form className='formulario' onSubmit={handleSubmitNewMensaje}>
                <input
                    className="input-texto"
                    type="text"
                    ref={mensajeRef}
                    placeholder='Mensaje'
                />
                <button className="btn" type='submit'><i className="bi bi-send"></i></button>
            </form>
        </div>
    );
};
 */