import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import "./App.css"
import Workflow from "./Components/Workflow";

function App() {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <section><Navbar></Navbar></section>
      <section><Hero></Hero></section>
      <section><About></About></section>
      <section><Workflow></Workflow></section>
    </>
  );
}

export default App;
