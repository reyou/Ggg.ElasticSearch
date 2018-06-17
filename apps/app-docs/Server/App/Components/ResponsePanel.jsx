import React from "react";
export default function ResponsePanel(props) {
  return (
    <div className="responsePanel">
      <pre>url: {props.state.url}</pre>
      <pre>error: {props.state.error}</pre>
      <pre>name: {props.state.name}</pre>
      <pre>message: {props.state.message}</pre>
      <pre>response: {props.state.response}</pre>
      <pre>body: {props.state.body}</pre>
    </div>
  );
}
