import React from 'react'
import '../../src/App.css'

function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavText">
                <a href='/home'>Home</a>
                <a href='/college_details'>Universities</a>
                <a href='/admissions'>Admissions</a>
            </div>
        </div>
    )
}

export default NavBar
