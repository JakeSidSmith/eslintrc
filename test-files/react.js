/* global React, ReactDOM */

'use strict';

(function () {

  var Header = function () {
    return (
      <h1 className={this.props.className}>
        {this.props.children}
      </h1>
    );
  };

  var App = React.createClass({
    render: function () {
      return (
        <Header className="my-class" awesome>
          Hello, world!
          <span />
          <span
            prop
          />
        </Header>
      );
    }
  });

  ReactDOM.render(
    <App />
  );

})();
