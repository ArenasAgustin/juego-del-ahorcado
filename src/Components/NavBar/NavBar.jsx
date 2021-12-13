import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink className="navbar__link" to="/">
                <button className="navbar__link-button">
                    Nivel
                </button>
            </NavLink>
        </nav>
    );
}