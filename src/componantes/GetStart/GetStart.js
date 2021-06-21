import React from 'react'
import { Link } from "react-router-dom";
import "./GetStart.css"

function componentName() {
    return (
        <div class="gatstart">
            <div class="position-absolute top-50 start-50 translate-middle">
            <Link to="/welcome"> <button class="start-btn">Get Start</button></Link>
            </div>

        </div>
    )
}

export default componentName
