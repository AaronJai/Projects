// a function passedas an argument to setState() usually e.g., setYear(arrow function)
//                                                             setYear(y => y + 1)
// allow for safe updates based on previous state,
// used with multiple state updates and asynchronous functions.
// good practice to use updater functions.

// its like refreshing a page. you can do it multiple times, but it really only does it once.

import React, {useState} from 'react';

function UpdateFunction() {
    const [count, setCount] = useState(0);

    function increment() {
        // if we just did setCount(count + 1); * 3 times, it's just adding 0 + 1, three times.
        setCount(count + 1);
    }

    // updater function example saving previous state so it can increment 3 times.
    
    function increment2() {

        // Takes the PENDING state to calculate NEXT state.
        // react puts your updated function in a queue.
        // During the next render, it will call them in the same order
        // naming convention is 1st char or prevCount
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    function decrement() {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    // doesn't need to be changed
    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className='count-display'>{count}</p>
            <button className='counter-button' onClick={decrement}>Decrement</button>
            <button className='counter-button' onClick={reset}>Reset</button>
            <button className='counter-button' onClick={increment2}>Increment</button>
        </div>

    );
}

export default UpdateFunction