import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import "./App.css"
import Workflow from "./Components/Workflow";

function App() {
  return (
    <>
      <section><Navbar></Navbar></section>
      <section><Hero></Hero></section>
      <section><About></About></section>
      <section><Workflow></Workflow></section>
    </>
  );
}

export default App;
