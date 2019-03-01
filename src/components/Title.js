import React from "react";

// if not destructured like below, add the props.name and props.title where appropriate.
//export default function Title(props) {
export default function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
