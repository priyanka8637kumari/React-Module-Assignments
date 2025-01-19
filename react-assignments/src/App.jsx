import "./App.css";
import PersonDetails from "./Components/Person";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div className="container">
      <header>
        <h1>Personal Details</h1>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object
       as props and render the data */}
      <PersonDetails person={person} />
    </div>
  );
}

export default App;
