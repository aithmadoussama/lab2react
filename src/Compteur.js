import { useState } from "react";

function Compteur() {
    const [compte, setCompte] = useState(0);

    function incrimenter() {
        setCompte(compte + 1);
    }

    return (
        <div>
            <p>Vous avez clicker le boton {compte} fois .</p>
            <button onClick={incrimenter}>Incrimenter</button>
        </div>
    )
}

export default Compteur;