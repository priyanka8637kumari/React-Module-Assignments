import React from "react";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import RouterComponent from "./Components/RouterComponent/RouterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

  //  TODO ad routes to the components we've created so far
  return (
    <div>
      <header>
        <h1>This is React</h1>
        <Router>
          <RouterComponent />

          <Routes>
            <Route path="/state" element={<MyStateComponent />} />
            <Route path="/effects" element={<EffectsComponent />} />
            <Route path="/props" element={<PropsComponent name={person.name} info={person.info} />} />
          </Routes>
        </Router>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data 
      <PropsComponent person={person} /> 
       <MyStateComponent />
      <EffectsComponent /> 
*/}
    </div>
  );
}

export default App;
