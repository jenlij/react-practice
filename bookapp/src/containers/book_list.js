import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
          return (
            <li
              key={book.title}
              onClick={() => this.props.selectBook(book)}
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
        );
    }

}

//this will rerender automatically when the application state changes
function mapStateToProps(state) {
    // whatever is returned will show up as props inside of booklist
    return {books: state.books};
}

//anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
    //whenever selectbook is called, the result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}


//promote booklist from a component to a container - it needs to know about
// this new dispatch method, selectbook. make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList); //function + component = container (smart component)