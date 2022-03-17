import React from 'react';

const Label = ({ label, position }) =>  (
        <text className="label"  transform={`translate(${position})`}>
            {label}
        </text>
    )

export default Label