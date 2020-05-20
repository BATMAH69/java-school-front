import React, { Component, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { string, func } from 'prop-types'

const Widget = ({ target, message, handlerUpdate }) => (
  <div>
    <div>Hi {target} {message}</div>
    <input onChange={handlerUpdate} />
  </div>
);

Widget.propTypes = {
  target: string.isRequired,
  message: string.isRequired,
  handlerUpdate: func.isRequired
};

Widget.defaultProps = {
  target: 'world'
};

const App = (props) => {
  const [text, setText] = useState('');
  const [width, setWidth] = useState('');
  const widgetRef = useRef(null);

  const update = (e) => {
    setText(e.target.value);
    setWidth(ReactDOM.findDOMNode(widgetRef.current).offsetWidth)
  };

  return (
    <div ref={widgetRef} style={{ display: 'inline-block' }}>
      <Widget
        target={props.target}
        message={text}
        handlerUpdate={update}
      />
      <div>{width}</div>
    </div>
  );
};

App.propTypes = {
  target: string.isRequired
};

export default App;