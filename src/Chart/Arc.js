import React from 'react';
import "./Arc.css";

const Arc = ({ data, index, createArc, color }) => (
    <React.Fragment>
        <g className="arc" key={index}        >
            <path d={createArc(data)} fill={color(index)} />
        </g>
    </React.Fragment>
)

export default Arc