import React from "react"
import PropTypes from "prop-types"
import { accessorPropsType } from "./utils";

const Circles = ({ data, keyAccessor, xAccessor, yAccessor, radius, ...props }) => (

    <React.Fragment>
        {data.map((d, i) => (            
            <circle {...props}
                className = {"Circles__circle " + d.name }
                key = { keyAccessor(d, i) }
                cx = { xAccessor(d) }
                cy = { yAccessor(d) }
                r = {typeof radius == "function" ? radius(d) : radius}
            />
        ))}
    </React.Fragment>
)

Circles.propTypes = {
    data: PropTypes.array,
    keyAccessor: accessorPropsType,
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    radius: accessorPropsType,
}

Circles.defaultProps = {
    radius: 5,
}

export default Circles
