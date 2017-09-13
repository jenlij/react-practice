import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired
    };
    // REQUIRED FOR CLASSES
    render() {
        const { name, children } = this.props;
        const creaturesOnBoard = children.map((child, idx) =>{
            if(child.type.name === "CrewMember") {
                return child;
            } else {
                return(
                    <div className="alert" key={idx}>
                        {child}
                    </div>
                );
            }
        });
        return (
        <div>
            <h1>{name}</h1>
            {creaturesOnBoard}
        </div>
        );

    }
}

export default Spaceship;

