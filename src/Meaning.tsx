import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  if (props.active) {
    return (
      <div>
        {/* <button class="btn btn-dark">{props.meaning.partOfSpeech}</button> */}
        <ol type="1">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <li key={index}>
                <p>
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </p>
              </li>
            );
          })}
        </ol>
        {/* <h4>Synonyms</h4>
        <ul className="text-decoration-none">
          {props.meaning.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul> */}
      </div>
    );
  }
}
