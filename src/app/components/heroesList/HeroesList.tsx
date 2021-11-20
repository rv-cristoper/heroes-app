import React from 'react'
import { IHeroe } from '../../resources/selectors/IHeroe'
import { getHeroesByPublisher, getHeroes } from '../../resources/selectors/getHeroes'

interface IProps {
    publisher?: string
}

const HeroesList = ({ publisher }: IProps): JSX.Element => {

    const heroes: IHeroe[] = publisher ? getHeroesByPublisher(publisher) : getHeroes()

    return (
        <div>
            <h2>Hero List{publisher ? ` - ${publisher}` : ''}</h2>
            <ul>
                {
                    heroes.map((hero: IHeroe, key) =>
                        <li key={key}>{hero.superhero}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default HeroesList
