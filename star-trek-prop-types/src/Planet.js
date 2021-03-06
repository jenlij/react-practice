import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Planet extends Component {
  // constructor(props) {
  //   super(props);
  //   this.children = this.props.children;
  // }

  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    classification: PropTypes.string.isRequired,
  };

  static defaultProps = {
    classification: "Unknown"
  };

  render() {
    const {
      name,
      classification,
      children
    } = this.props;

    return (
      <div>
        <h1>{name.toUpperCase()} [{classification} class]</h1>
        {children}
      </div>
    )
  }
}

export default Planet;
