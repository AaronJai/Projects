
function Food() {

    const food1 = "Pizza";
    const food2 = "ChickenNCheese";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2}</li>
        </ul>
    );
}

export default Food