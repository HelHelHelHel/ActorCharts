import React from 'react';

const Nav = props => {
    
    const handleButton = (e) => {
        props.onClick(e.target.value)
    }

    return (
        <div>
            <button value='22616' onClick={handleButton}>Bruce Willis</button>
            <button value='19302' onClick={handleButton}>Salma Hayek</button>
        </div>
    )
}
export default Nav;