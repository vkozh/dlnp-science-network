import React from "react"
import PropTypes from "prop-types"
import * as d3 from "d3"

import Chart from "./Chart/Chart"
import Circles from "./Chart/Circles"
import Axis from "./Chart/Axis"
import { useChartDimensions, accessorPropsType } from "./Chart/utils"

const ScatterPlot = ({ data, xAccessor, yAccessor, xLabel, yLabel }) => {
    const [ref, dimensions] = useChartDimensions({
        marginBottom: 77,
    })
    const xScale = d3.scaleLinear()
        .domain(d3.extent(Object.values(data), xAccessor))
        .range([0, dimensions.boundedWidth])
        .nice()

    const yScale = d3.scaleBand()
        .domain(Object.keys(data))
        .range([dimensions.boundedHeight, 0])

    //  const xScale1 = d3.scaleLinear()
    //      .domain([d3.min(Object.values(data), d => d.length - 0.5), d3.max(Object.values(data), d => d.length + 0.5)])
    //      .range([0, dimensions.width * 0.5])
 
    //  const yName = d3.scaleBand()
    //      .domain(Object.keys(data))
    //      .range([0, dimensions.boundedHeight * 0.5])
    //      .paddingInner(1)
    //      .paddingOuter(0.5)

    const xAccessorScaled = d => xScale(xAccessor(d[1]))
    const yAccessorScaled = d => yScale(yAccessor(d[0]))
    const keyAccessor = (d, i) => i

    return (
        <div className="ScatterPlot" ref={ref}>
            <Chart dimensions={dimensions}>
                <Axis
                    dimensions={dimensions}
                    dimension="x"
                    scale={xScale}
                    label={xLabel}
                />
                <Axis
                    dimensions={dimensions}
                    dimension="y"
                    data={ Object.keys(data) }
                    scale={ yScale }
                    label={ yLabel }
                />
                <Circles
                    data={ Object.entries(data) }
                    keyAccessor={ keyAccessor }
                    xAccessor={ xAccessorScaled }
                    yAccessor={ yAccessorScaled }
                />
            </Chart>
        </div>
    )
}

ScatterPlot.propTypes = {
    xAccessor: accessorPropsType,
    yAccessor: accessorPropsType,
    xLabel: PropTypes.string,
    yLabel: PropTypes.string,
}

ScatterPlot.defaultProps = {
    xAccessor: d => d.x,
    yAccessor: d => d.y,
}
export default ScatterPlot
