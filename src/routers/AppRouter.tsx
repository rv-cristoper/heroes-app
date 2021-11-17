import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../app/components/layout/Layout'
import DcScreen from '../app/pages/DcScreen'
import HeroesScreen from '../app/pages/HeroesScreen'
import Loggin from '../app/pages/Loggin'
import MarvelScreen from '../app/pages/MarvelScreen'
import SearchScreen from '../app/pages/SearchScreen'

const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HeroesScreen />} />
                    <Route path="/loggin" element={<Loggin />} />
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRouter
