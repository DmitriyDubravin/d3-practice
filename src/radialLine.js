import React, {Component} from 'react';
import * as d3 from "d3";

export default class RadialLine extends Component {
    componentDidMount() {


        const data = [
            [0, 80],
            [Math.PI * 0.25, 90],
            [Math.PI * 0.5, 80],
            [Math.PI * 0.75, 30],
            [Math.PI, 80],
            [Math.PI * 1.25, 80],
            [Math.PI * 1.5, 80],
            [Math.PI * 1.75, 80],
            [Math.PI * 2, 80],
        ];

        const radialLine = d3.radialLine();

        const radialLineData = radialLine(data);

        const lineChart = d3
            .select('#radialLine')
            .append('svg')

        lineChart
            .attr('style', 'background: #fafafa')
            .attr('width', 200)
            .attr('height', 200)
            .append('g')
            .attr('transform', `translate(${100},${100})`)
            .append('path')
            .attr('fill', 'none')
            .attr('stroke', '#999')
            .attr('d', radialLineData);



    }
    render() {
        return <div id="radialLine"></div>
    }
}