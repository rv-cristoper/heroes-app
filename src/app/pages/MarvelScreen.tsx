import React from 'react'
import HeroesList from '../components/heroesList/HeroesList'

const MarvelScreen = (): JSX.Element => {
    return (
        <div>
            <h1>Heroes Marvel</h1>
            <HeroesList publisher='Marvel Comics'/>
        </div>
    )
}

export default MarvelScreen
