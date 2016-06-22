$ = jQuery = require('jquery');
var React = require('react');

/*React Componenets*/
var Home = require('./components/homePage');
var Header = require('./components/common/header');
var About = require('./components/about/aboutPage');
var Author = require('./components/authors/authorsPage');

(function (win) {
    "use strict";
    var App = React.createClass({

        render: function render() {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                case  'authors':
                    Child = Author;
                    break;
                default:
                    Child = Home;
            }
            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }

    });

    function renderWhenHashChanges() {
        //skip the # tag from route http://localhost/#about
        var route = win.location.hash.substr(1);
        //Instantiate the App Component
        React.render(<App route={route}/>, document.getElementById('app'));
    }

    win.addEventListener('hashchange', renderWhenHashChanges);
    renderWhenHashChanges();
})(window);