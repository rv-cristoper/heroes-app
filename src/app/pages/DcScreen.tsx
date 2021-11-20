import React from 'react'
import HeroesList from '../components/heroesList/HeroesList'

const DcScreen = (): JSX.Element => {
    return (
        <div>
            <h1>Heroes DC</h1>
            <HeroesList publisher='DC Comics' />
        </div>
    )
}

export default DcScreen
