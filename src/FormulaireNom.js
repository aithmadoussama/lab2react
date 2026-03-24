import { useState } from "react";

function FormulaireNom() {

    const [nom, setNom] = useState('');

    function handeleChange(event) {
        setNom(event.target.value);
    }

    function handeleSubmit(event) {
        event.preventDefault();
        alert(`le nom saisi est: ${nom}`);
    }


    return (
        <form onSubmit={handeleSubmit}>
            <label>
                Nom :
                <input type="text" value={nom} onChange={handeleChange} />
            </label>
            <button type="submit">Soumettre</button>
        </form>
    );

}

export default FormulaireNom; 