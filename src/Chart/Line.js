import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"
import { accessorPropsType } from "./utils";

const Line = ({ type, data, xAccessor, yAccessor, y0Accessor, dAccessor, interpolation, colorAccessor, ...props }) => {
  
  if(type === "Feature") {
    return data.length && data.map((d, i) => 
      <path { ...props }
        d = { dAccessor(d) }
        key = { i }
        className = { `Line Line--type-${type}` + " " + d.properties.name }
        fill = { colorAccessor(d.properties.continent) }
      />
    )
  }

  const lineGenerator = d3[type]()
    .x(xAccessor)
    .y(yAccessor)
    .curve(interpolation)

  if (data.type === "area") {
    lineGenerator
      .y0(y0Accessor)
      .y1(yAccessor)
  }

  return (
    <path {...props}
      className = { `Line Line--type-${type}` }
      d = { lineGenerator(data) }
    />
  )
}

Line.propTypes = {
  type: PropTypes.oneOf(["line", "area", "Feature"]),
  data: PropTypes.array,
  xAccessor: accessorPropsType,
  yAccessor: accessorPropsType,
  y0Accessor: accessorPropsType,
  interpolation: PropTypes.func,
}

Line.defaultProps = {
  type: "line",
  y0Accessor: 0,
  interpolation: d3.curveMonotoneX,
}

export default Line
