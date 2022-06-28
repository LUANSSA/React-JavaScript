import React from "react";
import { Link } from "react-router-dom"

function Navegacao() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/sobre">
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link to="/repositorios">
                        Reponsitórios
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navegacao;