import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './styles/header.scss'

const Header = (): JSX.Element => {
    return (
        <header className='header'>
            <div className='containerMain'>
                <div className='logo'>
                    <Link to='/'>
                        Criez.
                    </Link>
                </div>
                <div className='navigate'>
                    <nav>
                        <ul>
                            <li><NavLink to='/marvel'>Marvel</NavLink><span /></li>
                            <li><NavLink to='/dc'>DC</NavLink><span /></li>
                            <li><NavLink to='/search'>Seach</NavLink><span /></li>
                            <li>║</li>
                            <li><Link to='/loggin'>Loggin </Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
