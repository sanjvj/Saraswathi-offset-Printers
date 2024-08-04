import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import "./App.css"
import Workflow from "./Components/Workflow";
import PlantLayout from "./Components/PlantLayout";
import Client from "./Components/Client";

function App() {
  return (
    <>
      <section><Navbar></Navbar></section>
      <section><Hero></Hero></section>
      <section><About></About></section>
      <section><Workflow /></section>
      <section><PlantLayout></PlantLayout></section>
      <Client></Client>
    </>
  );
}

export default App;
