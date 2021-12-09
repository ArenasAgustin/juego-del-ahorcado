import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Draw from '../../Components/Draw/Draw'
import Word from '../../Components/Word/Word'

const Home = () => {
    const actualLevel = useSelector(state => state.actualLevel)

    const [word, setWord] = useState(actualLevel[Math.floor(Math.random() * actualLevel.length)])

    useEffect(() => {
        setWord(actualLevel[Math.floor(Math.random() * actualLevel.length)])
    }, [actualLevel])

    return (
        <div>
            <Draw />

            <Word word={word} />
        </div>
    )
}

export default Home
