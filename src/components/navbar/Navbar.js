import React from 'react';
import {Link} from 'react-router-dom';

const navbar = (props) => {

    return (

        <nav className="navbar navbar-expand-md navbar-fixed px-4" >
            <Link className="navbar-brand" to={"/Frontpage"}>УЧАМ</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/Mentor"}>Родител</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/Tasks"}>Активни задачи</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Board"}>Завршени задачи</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/Forum"}>Форум</Link>
                    </li>

                </ul>
            </div>
        </nav>

    )

}

export default navbar;
