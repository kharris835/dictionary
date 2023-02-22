import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  const [active, setActive] = useState("");

  console.log(active);

  function handleClick(partOfSpeech) {
    setActive(partOfSpeech);
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
        <div className="d-flex mt-2 mb-2">
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <button
                  className="btn btn-info ps-5 pe-5"
                  onClick={function () {
                    handleClick(meaning.partOfSpeech);
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
              <Meaning
                meaning={meaning}
                active={active === meaning.partOfSpeech}
              />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
