import React, { Component, Fragment } from "react";
import "./HamB.css";

class HamB extends Component {
  componentDidMount() {
    const btn = document.getElementById("btn");
    const nav = document.getElementById("nav");
    btn.addEventListener("click", () => {
      nav.classList.toggle("active");
      btn.classList.toggle("active");
    });
  }
  render() {
    return (
      <Fragment>
        <button id="btn">☰</button>
        <nav id="nav">
          <ul>
            <li>
              <a href="#">Google</a>
            </li>
            <li>
              {" "}
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}

export default HamB;
