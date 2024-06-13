// React hook - special function that allows functional components to use react features without
//              writing class components
//              (useState, useEffect, useContext, useReducer, useCallback, etc.)

// useState() - react hook allowing creation of stateful variale AND a setter function to
//              udate its value in the virtual DOM.[name, setName]

import React, {useState} from 'react'

function useStateHook() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "Aaron"; // virtual DOM shows previous state (name not showing), does show in console
        setName("Aaron");  // triggers re-render of virtual DOM.
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployed = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}>Toggle status</button>
        </div>
    );
}

export default useStateHook