import React from 'react'
import { Container } from 'react-bootstrap'

function Contact() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgb(38, 38, 38)", height: "100vh" }}
    >
      <h1>
        <br />
        <div className="d-flex justify-content-center">
          <img
            alt=""
            src="https://avatars.githubusercontent.com/u/107949089?v=4"
            width="260"
            height="260"
            className="avatar avatar-user width-full border color-bg-default"
          ></img>
        </div>
        <a href="https://github.com/mikeOz27" target="_blank">
          Michael martinez
        </a>
      </h1>
    </Container>
  );
}

export default Contact