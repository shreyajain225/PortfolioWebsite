import React from "react";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <div className="navBar">
      <button className="navOp">
        <Link className="opLink" to="Profile" spy={true} smooth={true}>
          Home
        </Link>
      </button>
      <button className="navOp">
        <Link to="About" className="opLink" spy={true} smooth={true}>
          About Me
        </Link>
      </button>
      <button className="navOp">
        <Link to="Skills" className="opLink" spy={true} smooth={true}>
          Skills
        </Link>
      </button>
      <button className="navOp">
        <Link to="Work" className="opLink" spy={true} smooth={true}>
          Work
        </Link>
      </button>
      <button className="navOp">
        <Link to="Contact" className="opLink" spy={true} smooth={true}>
          Contact
        </Link>
      </button>
    </div>
  );
}

export default Navigation;
