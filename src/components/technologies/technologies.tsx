import html from "../../assests/img/bages/html.png"
import css from "../../assests/img/bages/css.png"
import express from "../../assests/img/bages/express.png"

import jest from "../../assests/img/bages/jest.png"

import js from "../../assests/img/bages/js.png"
import ts from "../../assests/img/bages/ts.png"

import node from "../../assests/img/bages/node.png"
import react from "../../assests/img/bages/react.png"
import redux from "../../assests/img/bages/redux.png"
import sql from "../../assests/img/bages/sql.png"
import python from "../../assests/img/bages/python.png"
import heroku from "../../assests/img/bages/heroku.png"
import { Skills } from "./technologiesStyle"


const Technologies = () => {
  return (
    <>
      <Skills id="technologies">
        <h4>Technologies</h4>
      <div className="badges">
      <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />      
        <img src={react} alt="" />
        <img src={ts} alt="" />
        <img src={node} alt="" />

        <img src={sql} alt="" />
        <img src={redux} alt="" />
        <img src={jest} alt="" />
        <img src={express} alt="" />
        <img src={heroku} alt="" />
        <img src={python} alt="" />
      </div>
      </Skills>
  </>
  );
};

export default Technologies;