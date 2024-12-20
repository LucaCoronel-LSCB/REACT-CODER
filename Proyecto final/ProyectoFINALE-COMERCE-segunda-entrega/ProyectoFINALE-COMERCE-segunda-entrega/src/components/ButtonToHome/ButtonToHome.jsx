import React from 'react'
import { useNavigate } from "react-router-dom";

const ButtonToHome = () => {
    const navigate = useNavigate();
    return (
        <div>
          <button onClick={() => navigate("/")}>volver a home</button>
        </div>
    )
}

export default ButtonToHome






















