import React, {Component} from 'react';
import * as d3 from "d3";

export default class Line extends Component {
    componentDidMount() {
        const line = d3
            .line()
            .curve(d3.curveCardinal);
            // .curve(d3.curveLinear);
            // .curve(d3.curveCatmullRom);
            // .curve(d3.curveStep);
            

        const data = [
            [0, 80],
            [100, 100],
            [200, 30],
            [300, 50],
            [400, 40],
            [500, 80]
        ];

        const size = data.reduce((acc, item) => {
            let a0 = +acc[0];
            let a1 = +acc[1];
            let i0 = item[0];
            let i1 = item[1];
            return [
                a0 > i0 ? a0 : i0,
                a1 > i1 ? a1 : i1
            ];
        }, 0);

        const flippedData = data.map(item => {
            return [
                item[0],
                size[1] - item[1] + 20
            ];
        });

        const pathData = line(flippedData);

        const lineChart = d3
            .select('#line')
            .append('svg')

        lineChart
            .attr('style', 'background: #fafafa')
            .attr('width', size[0])
            .attr('height', size[1] + 20)
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#999')
            .attr('d', pathData);

        lineChart
            .selectAll('circle')
            .data(flippedData)
            .enter()
            .append('circle')
            .attr('cx', function(d) {
                return d[0];
            })
            .attr('cy', function(d) {
                return d[1];
            })
            .attr('r', 3);



    }
    render() {
        return <div id="line"></div>
    }
}