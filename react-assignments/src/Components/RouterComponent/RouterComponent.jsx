import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function RouterComponent() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/effect">Effect</Link>
        </li>
        <li>
          <Link to="/mystatecomponent">MyStateComponent</Link>
        </li>
        <li>
          <Link to="/props">Props</Link>
        </li>
      </ul>
    </nav>
  );
}

export default RouterComponent;
