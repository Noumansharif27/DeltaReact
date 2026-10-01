function Button() {
    let print = () => {
        console.log("Hello World!");
    }

    let mouseOverHandeler = ()=> {
        console.log("Bye!");
    }

    let doubleClickHandeler = () => {
        console.log("You Dubble Clicked!");
    }

    return (
        <>
        <button onClick={print}>Cick me!</button>
      <p onMouseOver={mouseOverHandeler}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga laboriosam autem earum commodi sit molestias totam quasi tempore delectus nam tenetur, dolorem repellendus ex quia? Sequi architecto libero vitae ad?
      Ratione, repellendus sequi, tenetur est natus veniam fugit nemo tempore quod, nesciunt ad veritatis laboriosam quam cupiditate adipisci nostrum consectetur repellat porro quaerat eligendi numquam! Eius, natus nobis. Deleniti, harum!
      Esse, nulla sunt temporibus quae tempora aperiam porro itaque. Labore laboriosam porro ipsum quia unde optio explicabo, excepturi libero saepe quasi! Distinctio pariatur excepturi veniam, quaerat commodi consequuntur eveniet obcaecati?
      A dicta consequuntur corporis omnis optio, sapiente amet deserunt id in ducimus tenetur sunt eaque perferendis ullam cupiditate perspiciatis consectetur neque cum adipisci blanditiis magni quisquam iste! Ex, molestias iusto.
      Qui rerum nulla vel alias. Atque ullam nobis doloribus vero vel provident est animi quis corrupti maxime perspiciatis quos molestias blanditiis, eius qui, reprehenderit porro officia earum quaerat laboriosam. Sapiente.</p>
        <button onDoubleClick={doubleClickHandeler}>Dubble Click me!</button>
        </>
    )
}

export default Button;