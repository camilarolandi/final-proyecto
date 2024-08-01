
/* Pantalla del chat */

 import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import {  useParams } from 'react-router-dom'
import { Header, ListaDeMensajes, NuevoMje } from '../../Components'
import "./screenchat.css"
import '../../styles.css'


export const Screen = ( ) => {
	 const { contactoID } = useParams() 
	const contactoIndex = MOOK_CONTACTOS.findIndex(contacto => contacto.id === Number(contactoID))
  	const contacto = MOOK_CONTACTOS[contactoIndex]
	const {mensajes} = contacto
	const [mensajes_data, setMensajesInfo]= useState(mensajes)


	const unselectContact = (contact) => {
		contact.is_selected = false
	}

	useEffect(()=> {
		setMensajesInfo(mensajes)
	}, [contactoID,mensajes]
)

	const newMensaje = (nuevoMensaje) => {
		const mje_nvo =   {
			author: "Yo",
			text: nuevoMensaje,
			estado: 'Visto',
			day: 'Hoy',
			hour: "12:30",
			id: mensajes_data.length + 1
		}
		const updatedMensajes = [...mensajes_data, mje_nvo]
    setMensajesInfo(updatedMensajes)
    MOOK_CONTACTOS[contactoIndex].mensajes = updatedMensajes
}

	return (
		<>
			<div className='screen-chat'>
        <Header unselectContact={ unselectContact }/>
        <ListaDeMensajes mensajes_info = {mensajes_data} />
        <NuevoMje enviarMensaje={newMensaje}/>
		</div>
		</>

		)
	} 






	/* import React, { useEffect, useState } from 'react';
	import { MOOK_CONTACTOS } from '../../../Mook';
	import { useParams } from 'react-router-dom';
	import { Header, ListaDeMensajes, NuevoMje } from '../../Components';
	import "./screenchat.css";
	import '../../styles.css';
	
	export const Screen = () => {
		const { contactoID } = useParams();
		const contactoIndex = MOOK_CONTACTOS.findIndex(contacto => contacto.id === Number(contactoID));
		const contacto = MOOK_CONTACTOS[contactoIndex];
		const { mensajes } = contacto;
		const [mensajes_data, setMensajesInfo] = useState(mensajes);
	
		const unselectContact = (contact) => {
			contact.is_selected = false;
		};
	
		useEffect(() => {
			setMensajesInfo(mensajes);
		}, [contactoID, mensajes]);
	
		const newMensaje = (nuevoMensaje) => {
			const mje_nvo = {
				author: "Yo",
				text: nuevoMensaje,
				estado: 'Visto',
				day: 'Hoy',
				hour: "12:30",
				id: mensajes_data.length + 1
			};
			const updatedMensajes = [...mensajes_data, mje_nvo];
			setMensajesInfo(updatedMensajes);
			MOOK_CONTACTOS[contactoIndex].mensajes = updatedMensajes;
	
			// Obtener el nombre del autor del mensaje de respuesta según el ID
			const contactoAutor = MOOK_CONTACTOS[contactoIndex].nombre || "Contacto";
	
			// Simula la llegada de un mensaje de otro autor después de 3 segundos
			setTimeout(() => {
				const responseMessage = {
					author: contactoAutor,
					text: "Hola, ¿cómo estás?",
					estado: 'No visto',
					day: 'Hoy',
					hour: "12:33",
					id: mensajes_data.length + 2
				};
				const updatedMensajesWithResponse = [...updatedMensajes, responseMessage];
				setMensajesInfo(updatedMensajesWithResponse);
				MOOK_CONTACTOS[contactoIndex].mensajes = updatedMensajesWithResponse;
			}, 3000);
		};
	
		return (
			<>
				<div className='screen-chat'>
					<Header unselectContact={unselectContact} />
					<ListaDeMensajes mensajes_info={mensajes_data} />
					<NuevoMje enviarMensaje={newMensaje} />
				</div>
			</>
		);
	};

*/
	