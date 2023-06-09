import React from "react";


const Footer = () => {
    const año = new Date().getFullYear();

    return (
        <footer>
                <div>
                    {`Copyright © GameZone ${año}`}
                </div>
        </footer>
    )
}

export default Footer