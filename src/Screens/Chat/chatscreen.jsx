/* Pantalla del chat */
import React, { useEffect, useState } from 'react'
import { MOOK_CONTACTOS } from '../../../Mook'
import { useParams } from 'react-router-dom'
import { Header, ListaDeMensajes, NuevoMje } from '../../Components'
import "./screenchat.css"
import '../../styles.css'

export const Screen = ({ colorTema }) => {
	const { contactoID } = useParams()
	const contactoIndex = MOOK_CONTACTOS.findIndex(contacto => contacto.id === Number(contactoID))
	const contacto = MOOK_CONTACTOS[contactoIndex]
	const { mensajes } = contacto
	const [mensajes_data, setMensajesInfo] = useState(mensajes)

	const unselectContact = (contact) => {
		contact.is_selected = false
	}

	useEffect(() => {
		setMensajesInfo(mensajes)
	}, [contactoID, mensajes])

	const newMensaje = (nuevoMensaje) => {
		const mje_nvo = {
			author: "Yo",
			text: nuevoMensaje,
			estado: 'Visto',
			day: 'Hoy',
			hour: "12:30",
			id: mensajes_data.length + 1
		}
		const mensajesActualizados = [...mensajes_data, mje_nvo]
		setMensajesInfo(mensajesActualizados)
		MOOK_CONTACTOS[contactoIndex].mensajes = mensajesActualizados
	}

	return (
		<>
			<div className='screen-chat' style={{backgroundImage:'url(/bg-chats.jpg)'}}>
				<Header unselectContact={unselectContact} colorTema={colorTema} />
				<ListaDeMensajes mensajes_info={mensajes_data} />
				<NuevoMje enviarMensaje={newMensaje} colorTema={colorTema} />
			</div>
		</>
	)
} 
