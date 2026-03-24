import { useState } from "react";

function ChangeText() {

    const [count, setCount] = useState(0);

    function incrementer() {
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <p>{count} click</p>
            <button onClick={incrementer}>Cliquer</button>
        </div>
    );
}

export default ChangeText;