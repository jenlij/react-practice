import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
          return (
            <li
              key={book.title}
            //   onClick={() => this.props.selectBook(book)}
              className="list-group-item"
            >
              {book.title}
            </li>
          );
        });
      }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

}

//this will rerender automatically when the application state changes
function mapStateToProps(state) {
    return ( {
        books: state.books
    }
    );
}

export default connect(mapStateToProps)(BookList); //function + component = container (smart component)