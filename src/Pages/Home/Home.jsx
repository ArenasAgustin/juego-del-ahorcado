import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Draw from '../../Components/Draw/Draw'
import Gallows from '../../Components/Gallows/Gallows'
import Input from '../../Components/Input/Input'
import NavBar from '../../Components/NavBar/NavBar'
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
            <div>
                <NavBar />
            </div>

            <div className='home__draws'>
                <div className='home__gallows'>
                    <Gallows />
                </div>

                <div className='home_person'>
                    <Draw />
                </div>
            </div>

            <div>
                <Word word={word} />

                <Input />
            </div>
        </div>
    )
}

export default Home
