import React from "react";

import { Link } from "components/Router";

export default () => (
  <div style={{ textAlign: "center" }}>
    <div className="logo"></div>

    <ul>
      <li>
        <Link to={`/wardrobes`}>Wardrobes</Link>
      </li>
      <li>
        <Link to={`/chest-of-draws`}>Chest of Draws</Link>
      </li>
      <li>
        <Link to={`/tables-chairs`}>Tables &amp; Chairs</Link>
      </li>
      <li>
        <Link to={`/others`}>Others</Link>
      </li>
    </ul>
  </div>
);
