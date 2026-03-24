import { useState } from "react";

function Formulaire() {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');

    function handleNomChange(event) {
        setNom(event.target.value);
    }

    function handlePrenomChange(event) {
        setPrenom(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        alert(`Nom : ${nom}, Prenom : ${prenom}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={nom} onChange={handleNomChange} />
            </label>

            <br />

            <label>
                Prenom :
                <input type="text" value={prenom} onChange={handlePrenomChange} />
            </label>

            <br />

            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Formulaire;