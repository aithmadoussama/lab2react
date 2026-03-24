import { useState } from "react";


function MessageBouton() {
    const [message, setMessage] = useState('cliquer sur le bouton');

    function changerMessage() {
        setMessage('Vous Avez cliquer sur le bouton !');
    }

    return (

        <div>
            <p>{message}</p>
            <button onClick={changerMessage}>cliquer</button>
        </div>

    )

}

export default MessageBouton;