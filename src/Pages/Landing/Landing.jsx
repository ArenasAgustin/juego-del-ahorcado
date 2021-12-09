import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {getEasyLevel, getMediumLevel, getHardLevel} from '../../redux/actions/index'
import './landing.scss'

const Landing = () => {
    
    const dispatch = useDispatch()

    const handleLevel = (level) => {
        console.log('!!!!!!!!! HANDLE', level)
        if(level === "EASY") return dispatch(getEasyLevel())
        if(level === "MEDIUM") return dispatch(getMediumLevel())
        return dispatch(getHardLevel())
    }

    return (
       <div className="container">
           <h1>Ahorcado</h1>
           <div className="containerlevels">
                <h3>Hoy con que nivel te desafias?</h3>
                <div className="container-btns">
                    <div className="btns">
                         <Link to= '/home' className="btn">
                            <span className="btn" onClick={e => handleLevel("EASY")}>Facil</span>
                        </Link>

                        <Link to= '/home' className="btn"> 
                            <span className="btn" onClick={e => handleLevel("MEDIUM")}>Medio</span>
                        </Link>

                        <Link to= '/home' className="btn">
                            <span className="btn" onClick={e => handleLevel("HARD")}>Dificil</span>
                        </Link>    
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Landing
