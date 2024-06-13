
function List() {

    const fruits = [{id: 1, name: "Apple", calories: 95}, 
                    {id: 2, name: "Orange", calories: 45}, 
                    {id: 3, name: "Banana", calories: 105}, 
                    {id: 4, name: "Coconut", calories: 159}, 
                    {id: 5, name: "Pineapple", calories: 37}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name));    // Alphabetic order
    // fruits.sort((a, b) => a.calories - b.calories)          // numeric order

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const lowCalListItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.name}>
                                                            {lowCalFruit.name}: &nbsp;
                                                            <b>{lowCalFruit.calories}</b></li>);

    const listItems = fruits.map(fruit =>   <li key={fruit.name}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li>);

    return(<>
        <ol>{listItems}</ol>
        <ol>{lowCalListItems}</ol>
    </>
    );
}

export default List