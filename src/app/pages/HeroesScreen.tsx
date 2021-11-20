import React from 'react'
import HeroesList from '../components/heroesList/HeroesList'

const HeroesScreen = (): JSX.Element => {
    return (
        <div>
            <h1>All Heroes</h1>
            <HeroesList />
        </div>
    )
}

export default HeroesScreen
