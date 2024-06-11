
function Button2() {

    // const handleClick = () => console.log("OWIE");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
    let count = 0;
    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }
    }

    // Event handler
    const handleClick4 = (e) => e.target.textContent = "Ouch";

    // return(<button onClick={handleClick}>Click Me👩🏿‍🦯 </button>);
    // return(<button onClick={() => handleClick3("Bro")}>Click Me👩🏿‍🦯</button>)
    return(<button onClick={(e) => handleClick4(e)}>Click Me👩🏿‍🦯</button>)

}

export default Button2

// onDoubleClick