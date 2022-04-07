import React from "react";
import * as d3 from "d3";
import Chart from "./Chart/Chart";
import Circles from "./Chart/Circles";
import Line from "./Chart/Line";
import { useChartDimensions } from "./Chart/utils";

const Graph = (data) => {

    const [ref, dms] = useChartDimensions();

    let diameter = dms.height * 0.75;
    let radius = diameter / 2;
    let tree = d3.tree()
        .size([2 * Math.PI, radius])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);
        
    let treeData0 = d3.hierarchy(data.data);
    let treeData = tree(treeData0)
    console.log('tree', treeData0)

    const keyAccessor = (d, i) => i;
    const xAccessor = d => d.x;
    const yAccessor = d => d.y;

    const xLinkAccessor = d => d.target;
    const yLinkAccessor = d => d.source;


    const link = d3.linkRadial()
    .angle(d => d.x)
    .radius(d => d.y)

    return (
        <div className="Graph" ref = { ref } >
            {console.log(data.data)}
            <Chart dimensions={dms}>
                <Circles
                    data = { data.data.nodes }
                    keyAccessor = { keyAccessor }
                    xAccessor = { xAccessor }
                    yAccessor = { yAccessor }
                />
                <Line
                    data = {data.data.links}
                    xAccessor = { xLinkAccessor }
                    yAccessor = { yLinkAccessor }
                />
            </Chart>
        </div>
    )
}

export default Graph;