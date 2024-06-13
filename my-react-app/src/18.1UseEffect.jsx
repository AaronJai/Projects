import react, {useState, useEffect} from 'react'

function UseEffect2() {
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    //  WITHOUT useEffect()
    //  window.addEventListener(event, function);
    // window.addEventListener("resize", handleResize);
    // console.log("Event Listener Added");                // This would run each time we resize.

    // 2. WITH useEffect()
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // if strict mode, below runs twice. once development only setup, second cleanup cycle
        console.log("Event Listener Added");

        // do this code before next re=render (if no dependencies) or when component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    // useEffect(() => {
    //     document.title = `Size: ${width} x ${height}`
    // }, [width, height]);

    return(
        <>
            <p>Window Width {width}</p>
            <p>Window Height: {height}</p>
        </>
    );

}

export default UseEffect2