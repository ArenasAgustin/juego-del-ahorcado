import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getEasyLevel, getMediumLevel, getHardLevel } from '../../redux/actions/index'
import './Landing.scss'

const Landing = () => {

    const dispatch = useDispatch()

    const handleLevel = (level) => {
        if (level === "EASY") return dispatch(getEasyLevel())
        if (level === "MEDIUM") return dispatch(getMediumLevel())
        return dispatch(getHardLevel())
    }

    return (
        <div className="landing__container">
            <h1>Ahorcado</h1>
            <div className="landing__levels">
                <h3>Hoy con que nivel te desafias?</h3>
                <div className="landing__btns">
                    <div className="landing__div-btns">
                        <Link to='/home' className="landing__btn">
                            <span onClick={e => handleLevel("EASY")}>Facil</span>
                        </Link>

                        <Link to='/home' className="landing__btn">
                            <span onClick={e => handleLevel("MEDIUM")}>Medio</span>
                        </Link>

                        <Link to='/home' className="landing__btn">
                            <span onClick={e => handleLevel("HARD")}>Dificil</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
