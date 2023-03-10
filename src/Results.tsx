import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  const [active, setActive] = useState(0);

  function handleClick(index) {
    setActive(index);
  }

  if (props.results) {
    return (
      <div>
        <div>
          <h2 className="text-capitalize">{props.results.word}</h2>
        </div>
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              <Phonetics phonetic={phonetic} />
            </span>
          );
        })}
        <div className="results mt-2 ps-3 pt-3 pb-3">
          <div className="d-flex mt-2 mb-2 d-flex flex-wrap">
            {props.results.meanings.map(function (meaning, index) {
              return (
                <div key={index}>
                  <button
                    className={`partOfSpeechBtn btn  ${
                      active === index ? "activeBtn" : ""
                    }`}
                    onClick={function () {
                      handleClick(index);
                    }}
                  >
                    {meaning.partOfSpeech}
                  </button>
                </div>
              );
            })}
          </div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} active={active === index} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
