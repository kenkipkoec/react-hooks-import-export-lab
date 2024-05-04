import React from "react";


function NavBar() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
