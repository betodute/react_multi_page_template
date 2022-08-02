var App = function App() {
  return React.createElement(
    Template,
    null,
    React.createElement(
      'h1',
      null,
      ' Blog Entries '
    )
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));