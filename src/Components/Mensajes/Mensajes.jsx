/* Cada globito de mensaje*/
import React from 'react'
import "./mensajes.css"
import '../../styles.css'

export const Mensajes = ({ mensaje }) => {
    const { author, text, id, day, hour, estado } = mensaje

    return (
        <section className={`contenedor-chat ${author === "Yo" && "derecha"}`} key={id}>
            <div className={`chats ${author === "Yo" && "der"}`}>
                <span className='author'>{author}</span>
                <p className='mensaje-texto'>{text}</p>
                {author === "Yo" && (
                    <div className='contenedor-inferior'>
                        <span className='day-hour'>{`${day} ${hour}`}</span>
                        <div className='estado-cont'>
                            <span>{estado}</span>
                            {estado === "Visto" && <i className="bi bi-check2-all"></i>}
                            {estado === "Entregado" && <i className="bi bi-check2"></i>}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
