import {React} from 'react';
// import Arrows from "./Chart/Arrows";
// import Label from "./Chart/Labels";
import Line from "./Chart/Line";
import Chart from "./Chart/Chart";
import {
    useChartDimensions,
    accessorPropTypes
} from './Chart/utils';
import * as d3 from "d3"
import globe from './utils/globe.json';
import Circles from './Chart/Circles';

const Map = ({
        data,
        // label,
        // nodesAccessor,
        // linksAccessor
}) => {

    const [ref, dms] = useChartDimensions();
    let proj = d3.geoMercator()
        .scale(512 / (2 * Math.PI));

    proj.translate([dms.width / 2, dms.height / 2]);
    let path = d3.geoPath().projection(proj);
    
    data.nodes.forEach((d) => {
        let pos = proj([d.lon, d.lat]);
        d.x = pos[0];
        d.y = pos[1];
    })
    
    const colorAccessor = d3.scaleOrdinal(d3.schemeAccent);
    const dAccessor = d => path(d);
    const keyAccessor = (d, i) => i;
    const xAccessor = d => d.x;
    const yAccessor = d => d.y;

    return (
    <div className = "Map" ref={ ref }>
        <Chart dimensions={ dms }>
            <Line
                type="Feature"
                data = { globe.features } 
                dAccessor={ dAccessor }
                colorAccessor = { colorAccessor }
            />
            <Circles
                data={ data.nodes }
                keyAccessor={ keyAccessor }
                xAccessor={ xAccessor }
                yAccessor={ yAccessor }
            />
        </Chart>
    </div>
    )
}

export default Map;