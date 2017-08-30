import React, { Component } from 'react';

const formatUnit = units => units.toUpperCase();
const Readout = ({temp, unit}) => (
    <div>
        <span>
            {temp}{formatUnit(unit)}
        </span>
    </div>
);

export default Readout;