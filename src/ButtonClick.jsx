function ButtonClick(){

    const handleClick = () => console.log("OUCH!");

    // click event handle with parameters
    const handleClick2 = (name) => console.log (`${name} stop clicking me`)

    //condition
    let count = 0;

    const handleClick3 = (name) => {
        if(count < 3){
            count ++
            console.log(`${name}, you clicked me ${count} time/s`)
        } else {
            console.log(`${name}, stop clicking me`)
        }
    }

    //event
    const handleClickEvent = (e) => {
        //console.log(e);
    
        //target propety with eventclick
        e.target.textContent = "OUCH!";
    }

    
    

    return(
        <>
            <button onClick= {handleClick}>Click me</button>

            <button onClick=  {() => handleClick2("piumx")}>Click meeeee</button>

            <button onClick={() => handleClick3("piumx")}>Click meee3</button>

            <button onClick={(e) => handleClickEvent(e)}>Click meeeee Event</button>

            {/* double click */}
            <button onDoubleClick={(e) => handleClickEvent(e)}>Click meeeee Event</button>

        </>   
    );
}

export default ButtonClick