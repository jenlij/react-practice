import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrewMember from './CrewMember';

class Spaceship extends Component {
    static propTypes = {
        name: PropTypes.string,
        children: PropTypes.node.isRequired,
        commanderType: PropTypes.element
    };
    static defaultProps = {
        commanderType: CrewMember
    }
    render() { // REQUIRED FOR CLASSES
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

