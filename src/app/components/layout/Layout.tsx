import React from 'react'
import Header from './Header'

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout
