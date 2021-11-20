import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import './scss/cardAccess.scss'

interface IUser {
    username: string,
    password: string
}

const CardAccess = (): JSX.Element => {

    const [user, setUser] = useState<IUser>({
        username: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        console.log(user)
    }

    const { username, password }: IUser = user;

    return (
        <div className="containerAccess">
            <div className='logo'>
                <Link to='/'>
                    Criez.
                </Link>
            </div>
            <div className="contAccess">
                <div className="titleAccess">
                    <div>Iniciar sesión como:</div>
                    <div>Administrador</div>
                </div>
                <div className="infoAccess">
                    <div className="infTit">Para ingresar a la plataforma debe poner sus credenciales de acceso.</div>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="formBody" >
                        <label htmlFor="accessUser">
                            <input
                                id="accessUser"
                                type="email"
                                name='username'
                                placeholder="Ingrese su correo"
                                value={username}
                                onChange={onChange}
                                disabled={loading}
                                required />
                        </label>
                        <label htmlFor="accessPass">
                            <input
                                id="accessPass"
                                className="inpPass"
                                type={`${showPassword ? 'text' : 'password'}`}
                                placeholder="Contraseña"
                                name='password'
                                value={password}
                                onChange={onChange}
                                disabled={loading}
                                required
                            />
                            <i className={`far fa-eye${showPassword ? '-slash' : ''} ${loading ? 'disabled' : ''} `} onClick={() => setShowPassword(!showPassword)} />
                        </label>
                    </div>
                    <div className="formFooter">
                        <button type='submit' disabled={loading}>
                            {
                                loading ? 'CARGANDO...' : 'INICIAR SESIÓN'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CardAccess
