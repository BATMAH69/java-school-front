import React from 'react';
import { string } from 'prop-types'
// //origin js
// const App = function App() {
//   return React.createElement(
//     'div',
//     null,
//     'Hi World1'
//   );
// };

// // class
// class App extends React {
//   render() {
//     return (
//       <div>Hi World</div>
//     )
//   }
// }

// arrow
const App = ({ target }) => (
  <div>Hi {target}</div>
);

App.propTypes = {
  target: string.isRequired
};

export default App;