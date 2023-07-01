import React, { useState } from 'react';
import App from './App';

const People = () => {

    const [count, setCount] = useState(0)


    return (
        <>
            <h1>
                Привет
            </h1>
            {
                count < 9 && <div>{count}</div>
            }
            <div>Кистаман</div>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <App count={count}/>
            <App count={count}/>
            <App count={count}/>
        </>
    );
};

export default People;