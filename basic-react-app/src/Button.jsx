function Button() {
    let print = () => {
        console.log("Hello World!");
    }

    let Bye = ()=> {
        console.log("Bye!");
    }

    return (
        <>
        <button onClick={print}>Cick me!</button>
      <p onClick={Bye}>This is a paragraph</p>
        </>
    )
}

export default Button;