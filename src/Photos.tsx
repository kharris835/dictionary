import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="">
        <div className="row mt-2 mb-2">
          {props.photos.map(function (photo, keyword) {
            return (
              <div className="col-4" key={photo.id}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={keyword}
                    className="img-fluid mt-2 mb-2 photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}
