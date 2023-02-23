import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(Object.keys(props.meaning.synonyms).length);

  if (props.active) {
    return (
      <div>
        <ol type="1" className="mb-4">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <li key={index}>
                <p className="me-3">
                  {definition.definition}
                  <br />
                  <em>{definition.example}</em>
                </p>
              </li>
            );
          })}
        </ol>
        {Object.keys(props.meaning.synonyms).length > 0 && (
          <>
            <h4>Synonyms</h4>
            <ul className="d-flex flex-wrap pt-1 ps-0">
              {props.meaning.synonyms.map(function (synonym, index) {
                return (
                  <li
                    className="synonyms text-capitalize text-center ps-2 pe-2 mb-2 me-2 ms-2"
                    key={index}
                  >
                    {synonym}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}
