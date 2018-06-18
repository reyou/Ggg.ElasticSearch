import React from "react";
export default function ResponsePanel(props) {
  let error = props.state.error;
  let response = props.state.response;
  return (
    <div className="responsePanel">
      <pre>url: {props.state.url}</pre>
      <pre>error: {error}</pre>
      <pre>name: {props.state.name}</pre>
      <pre>message: {props.state.message}</pre>
      <pre>
        response: <br /> {response}
      </pre>
      <pre>body: {props.state.body}</pre>
    </div>
  );
}
