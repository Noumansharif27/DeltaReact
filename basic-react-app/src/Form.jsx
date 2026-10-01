export default function Form() {
  let onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Form Gets Submited!");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" />
      <button>Submit</button>
    </form>
  );
}
