import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Draw from '../../Components/Draw/Draw'
import Gallows from '../../Components/Gallows/Gallows'
import Word from '../../Components/Word/Word'
import './Home.scss'

const Home = () => {
    const actualLevel = useSelector(state => state.actualLevel)

    const [word, setWord] = useState(actualLevel[Math.floor(Math.random() * actualLevel.length)])

    useEffect(() => {
        setWord(actualLevel[Math.floor(Math.random() * actualLevel.length)])
    }, [actualLevel])

    return (
        <div className='home'>
            <div className='home__draws'>
                <div className='home__gallows'>
                    <Gallows />
                </div>

                <div className='home_person'>
                    <Draw />
                </div>
            </div>

            <Word word={word} />
        </div>
    )
}

export default Home
