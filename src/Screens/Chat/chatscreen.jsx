/* Pantalla del chat */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header, ListaDeMensajes, NuevoMje } from '../../Components'
import { MOOK_CONTACTOS } from '../../../Mook'
import './screenchat.css'
import '../../styles.css'


const iniciarLS = () => {
    const mookGuardado = JSON.parse(localStorage.getItem('MOOK_CONTACTOS'))
    if (mookGuardado === null) {
        localStorage.setItem('MOOK_CONTACTOS', JSON.stringify(MOOK_CONTACTOS))
    }
}

const obtenerDatosLS = (contactoID) => {
    const mookGuardado = JSON.parse(localStorage.getItem('MOOK_CONTACTOS'))
    return mookGuardado.find(contacto => contacto.id === Number(contactoID))
}

const guardarEnLS = (listaDeMensajes) => {
    const mookGuardado = JSON.parse(localStorage.getItem('MOOK_CONTACTOS'))
    const index = mookGuardado.findIndex(c => c.id === listaDeMensajes.id)
    if (index > -1) {
        mookGuardado[index] = listaDeMensajes
    }
    localStorage.setItem('MOOK_CONTACTOS', JSON.stringify(mookGuardado))
}

export const Screen = ({ colorTema }) => {
    const { contactoID } = useParams()
    const [mensajes_data, setMensajesInfo] = useState([])
    
    useEffect(() => {
        iniciarLS()
        const listaDeMensajes = obtenerDatosLS(contactoID)
        if (listaDeMensajes) {
            setMensajesInfo(listaDeMensajes.mensajes)
        } 
    }, [contactoID])

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

        const listaDeMensajes = obtenerDatosLS(contactoID)
        if (listaDeMensajes) {
            listaDeMensajes.mensajes = mensajesActualizados
            guardarEnLS(listaDeMensajes)
        }
    }

    const unselectContact = (contact) => {
        contact.is_selected = false
    }

    return (
        <>
            <section className='screen-chat' style={{ backgroundImage: 'url(/bg-chats.jpg)' }}>
                <Header unselectContact={unselectContact} colorTema={colorTema} />
                <ListaDeMensajes mensajes_info={mensajes_data} />
                <NuevoMje enviarMensaje={newMensaje} colorTema={colorTema} />
            </section>
        </>
    )
}
