import { useState } from 'react';
import Client from './Client';

export default function App() {
    const [loadClient, setLoadClient] = useState("");

    function handleClick(e) {
        e.preventDefault();

        setLoadClient(prevState => !prevState);
    }

    return (
        <>
            <button onClick={e => handleClick(e)}>TOGGLE CLIENT</button>
            {loadClient ? <Client /> : null}
        </>
    )
}