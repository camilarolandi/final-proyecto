/* Listado de mensajes*/
import React from 'react'
import { Mensajes } from '../Mensajes/Mensajes'
import "./listamjes.css"
import '../../styles.css'


export const ListaDeMensajes = ({mensajes_info}) => {
	return (
		<div className='contenedor-chats'>
			{
				mensajes_info.map((mensaje_info) => <Mensajes mensaje = {mensaje_info} key={mensaje_info.id} />)
			}
		</div>
	)
} 

