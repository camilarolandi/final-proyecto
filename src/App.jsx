import React from 'react'
import { ContactoData, MainLayout } from './Components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <Routes>
            <Route path="/*" element={<MainLayout />} />
            <Route path="/contactodata/:contactoID" element={<ContactoData />} />
        </Routes>
    )
}

export default App
