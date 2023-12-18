import React from "react";
import { Link } from "react-router-dom";


function Food() {
    return (
        <div>
            <h1>Thera no food here!</h1>
            <img
                src="https://"
                alt=""
            />
            <Link exact to="/Home">
                <button>Go Back </button>
            </Link>
        </div>
    );

}

export default Food;