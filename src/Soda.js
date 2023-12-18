import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
            <h1>Only Diet Coke!!!!!</h1>
            <img
                src="https://"
                alt="Diet Coke Can"
            />
            <Link exact to="/Home">
                <button>Go Back </button>
            </Link>
        </div>
    );
}

export default Soda;
