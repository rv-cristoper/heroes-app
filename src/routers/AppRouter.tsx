import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import DcScreen from '../pages/DcScreen'
import HeroesScreen from '../pages/HeroesScreen'
import Loggin from '../pages/Loggin'
import MarvelScreen from '../pages/MarvelScreen'
import SearchScreen from '../pages/SearchScreen'

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HeroesScreen />} />
                <Route path="/loggin" element={<Loggin />} />
                <Route path="/marvel" element={<MarvelScreen />} />
                <Route path="/dc" element={<DcScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
