/* Pagina principal */
import React, { useEffect, useState } from 'react'
import { Contactos, Screen } from '../../Screens'
import { Route, Routes, useLocation } from 'react-router-dom'
import { ContactoData } from '../Contacto-data/ContactoData'
import './mainlayout.css'
import '../../styles.css'
import { obtenerColorTema, actualizarColorTema } from "../../../LocalStorageFns"

export const MainLayout = () => {
    const location = useLocation()
    const [showWelcome, setShowWelcome] = useState(true)
    const [showListaColores, setShowListaColores] = useState(false)
    const [colorTema, setColorTema] = useState(obtenerColorTema())

    useEffect(() => {
        if (location.pathname.includes('/screen/')) {
            setShowWelcome(false)
        } else {
            setShowWelcome(true)
        }
    }, [location])

    const hideWelcome = () => {
        setShowWelcome(false)
    }

    const contactSelect = (contact) => {
        contact.is_selected = true
    }

    const cambioColorOptions = () => {
        setShowListaColores(!showListaColores)
    }

    const hideColorOptions = () => {
        setShowListaColores(!showListaColores)
    }

    const changeColorTheme = (color) => {
        setColorTema(color)
        actualizarColorTema(color)
    }

    const listaDeColores = [
        { color: 'Default', bgColor: 'rgba(44, 43, 43, 0.984)' },
        { color: 'Green', bgColor: 'rgba(1, 37, 0, 0.965)' },
        { color: 'Red', bgColor: 'rgba(37, 0, 0, 0.965)' },
        { color: 'Purple', bgColor: 'rgba(56, 0, 39, 0.965)' },
        { color: 'Pink', bgColor: 'rgba(82, 0, 41, 0.984)' }
    ]

    return (
        <div className="main-layout">
            <Contactos
                colorTemas={colorTema}
                hideWelcome={hideWelcome}
                cambioColorOptions={cambioColorOptions}
                contactSelect={contactSelect}
            />
            <Routes>
                <Route path="/screen/:contactoID" element={<Screen colorTema={colorTema} />} />
                <Route path="/contactodata/:contactoID/screen" element={
                    <>
                        <ContactoData />
                        <Screen colorTema={colorTema} />
                    </>
                } />
            </Routes>

            {showWelcome && (
                <div className="welcome-screen">
                    <h2 className='titulo-welcome'>Bienvenido a la aplicación de chat</h2>
                    <p className='texto-welcome'>Seleccione un contacto para comenzar a chatear</p>
                </div>
            )}

            {showListaColores && (
                <div className={`contenedor-btns-colores ${colorTema}`}>
                    <div className='btn-titulo-cont'>
                        <button className='btn-close-colors' onClick={hideColorOptions}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                        <span className='colores-titulo'>Cambia el color de tu entorno</span>
                    </div>

                    {listaDeColores.map(colorItem => (
                        <div className='btn-span-cont' key={colorItem.color}>
                            <button
                                className="color-option"
                                style={{ backgroundColor: colorItem.bgColor }}
                                onClick={() => changeColorTheme(colorItem.color)}
                            ></button>
                            <span className='span-color'>{colorItem.color}</span>
                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}
