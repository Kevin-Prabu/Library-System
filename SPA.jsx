import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./spa.css";

export default function SPA() {
  return (
    <BrowserRouter>
      <div className="container" id="everything">

          <button><Link smooth to="#section1">Recent 
          Books</Link></button>
          <button><Link smooth to="#section2">Recent Author</Link></button>
          <button><Link smooth to="#section3">Best selling books</Link></button>
          <button><Link smooth to="#section4">Best selling author</Link></button>

        <section id="section1" style={sectionStyle}>
          <h1>Recent Books added</h1>
          <ol>
            <li>Onyx Storm</li>
            <li>Sunrise on the Reaping</li>
            <li>Great Big Beautiful Life</li>
            <li>Atmosphere</li>
            <li>The Widow</li>
          </ol>
        </section>

        <section id="section2" style={sectionStyle}>
          <h1>Recent Authors added</h1>
          <ol>
            <li>Rebecca Yarros</li>
            <li>Suzanne Collins</li>
            <li>Emily Henry</li>
            <li>Taylor Jenkins Reid</li>
            <li>John Grisham</li>
          </ol>
        </section>

        <section id="section3" style={sectionStyle}>
          <h1>Best Books</h1>
          <ol>
            <li>Atavists</li>
            <li>The Swan’s Daughter </li>
            <li>Everything Is Tuberculosis</li>
            <li>Is a River Alive?</li>
            <li>The Let Them Theory</li>
          </ol>
        </section>

        <section id="section4" style={sectionStyle}>
          <h1>Best Author</h1>
          <ol>
            <li>Mel Robbins</li>
            <li>Robert Macfarlane</li>
            <li>John Green</li>
            <li>Roshani Chokshi</li>
            <li>Lydia Millet</li>
          </ol>
        </section>
      </div>
    </BrowserRouter>
  );

}

const sectionStyle = {
  padding: "50px 20px",
  borderBottom: "1px solid #ddd",
};

