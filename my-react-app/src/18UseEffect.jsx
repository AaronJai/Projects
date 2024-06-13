// useEffect() - React Hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts   
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})               // Runs after every re-render
// 2. useEffect(() => {}, [])           // Runs only on mount
// 3. useEffect(() => {}, [value])      // Runs on mount + when value changes

// NOTE: Even w/out useEffect, title can still change.
// BUT: It helps with clarity - you know how and what makes something change
//      also gives you option to do some cleanup code.

// USES 
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import react, {useState, useEffect} from 'react'

function UseEffect() {
    
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

// 1.   title updates each time
    // useEffect(() => {
    //     document.title = `Count: ${count} ${color}`
    // });

// 2.   title only updated once; one and done effect.
    // useEffect(() => {
    //     document.title = `My Counter Program`
    // }, []);

// 3.   
// It works similar to 1. but you see the diff when you have more depencencies e.g., color
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color]);                                 // When color not added, title doesn't change with color

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);
    }

    function changeColour() {
        setColor(c => c === "green" ? "red" : "green");
    }

    return(
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColour}>Change Colour</button>
        </>
    );
}

export default UseEffect