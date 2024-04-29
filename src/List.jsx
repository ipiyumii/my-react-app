function List(){
    // const fruits = ["Banana","orange","Apple","Kivi","pineapple"];

    // convert array elements into objects
    const fruits = [{id: 1, name: "Banana", calories: 30},
                    {id: 2, name: "orange", calories: 140},
                    {id: 3, name: "Apple", calories: 35},
                    {id: 4, name: "Kivi", calories: 150},
                    {id: 5, name: "pineapple", calories: 55}];

    // fruits.sort((a,b) => a.name.localeCompare(b.name)); //alphebetical
    // fruits.sort((a,b) => b.name.localeCompare (a.name)) //revers alphebetic

    // //sort on caleries
    // fruits.sort((a,b) => a.calories - b.calories); //numwric
    fruits.sort((a,b) => b.calories - a.calories) //revers numeric

    const listItems = fruits.map(fruit => <li key = {fruit.id}>
                                                    {fruit.name} : &nbsp;
                                                    <b>{fruit.calories}</b> </li> )

    return(
        <ol>{listItems}</ol>
    );
}

export default List