import React, {useState} from 'react';

function UpdateFunctionObjects() {

    const [car, setCar] = useState({year: 2007, 
                                    make: "Toyota", 
                                    model: "Camry"});

    function handleYearChange(event) {
        // setCar({...car, year: event.target.value});  // spread current properties of car, and add year. 
                                                        // JS takes the latest form of a key since it doesnt accept duplicates

        // now use updater function:
        setCar(c => ({...c, year: event.target.value}));
        // When JS sees {} after arrow function, it thinks you are writing a multi-line statement. so enclose in ().
    }
    
    function handleMakeChange(event) {
        setCar(c => ({...c, make: event.target.value}));
    }
    
    function handleModelChange(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );


}

export default UpdateFunctionObjects