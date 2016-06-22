"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Author = React.createClass({
    getInitialSate: function () {
        return {
            authors: []
        };
    },
    componentWillMount: function () {
        //get data from our mock api and chna
        this.setState({authors: AuthorApi.getAllAuthors()});
    },
    render: function () {

        var createAuthorRow= function (author) {
            return(
              <tr key={author.id}>
                  <td><a href={"#/authors/"+ author.id}>{author.id}</a> </td>
                  <td> {author.firstName}  {author.lastName}</td>
                  </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});


module.exports = Author;
