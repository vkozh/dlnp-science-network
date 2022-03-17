import React from 'react';
import * as d3 from 'd3';
import Chart from "./Chart/Chart"
import PropTypes from 'prop-types'
import Arc from './Chart/Arc'
import { useChartDimensions, accessorPropsType } from './Chart/utils';
import Label from './Chart/Labels';


const Pie = ({ data }) => {
    const [ref, dms] = useChartDimensions();
    //console.log(data)
    let radius = Math.min(dms.width, dms.height) / 3;

    const createPie = d3.pie()
        .value(d => d[1].length)

    let createArc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius)

    const color = d3.scaleOrdinal(d3.schemePastel2)
    const datas = createPie(data)


    const createLabel = d => d[0][1] + ": " + d[1][1].length
        + " (" + Math.round(d[1][1].length * 100 / sum) + "%)";


    let sum = 0
    data.map(d => sum += d[1].length)

    return (
        <div className="Pie" ref={ref}>
            <Chart dimensions={dms}>
                {datas.map((d, i) => (
                    <g key={i + 1000} transform={`translate(${dms.width / 2 - dms.marginLeft}, ${dms.height / 2 - dms.marginTop})`}>
                        <Arc
                            key={i}
                            data={d}
                            index={i}
                            createArc={createArc}
                            color={color}
                            dms={dms} />
                        <Label key={i + 100} label={createLabel(Object.entries(d['data']))} position={createArc.centroid(d)} />
                    </g>
                ))}
            </Chart>
        </div>
    )
}

export default Pie;

/*Pie.propTypes = {
    data: PropTypes.array,
    label: PropTypes.string
}

Pie.defaultProps = {

}*/