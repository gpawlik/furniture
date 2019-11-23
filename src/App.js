import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
//
import { Link, Router } from "components/Router";
import Dynamic from "containers/Dynamic";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/wardrobes">Wardrobes</Link>
        <Link to="/chest-of-draws">Chest of Draws</Link>
        <Link to="/tables-chairs">Tables &amp; Chairs</Link>
        <Link to="/others">Others</Link>
      </nav>
      <div className="content body-wood">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <footer className="footer">
        <div className="section">
          <p>Contact: 083 300 23 82</p>
          <p>Based in Dublin</p>
        </div>
      </footer>
    </Root>
  );
}

export default App;
