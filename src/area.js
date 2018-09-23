import React, {Component} from 'react';
import * as d3 from "d3";

export default class Area extends Component {
    componentDidMount() {

        const data = [
            [0, 80],
            [100, 100],
            [200, 30],
            [300, 50],
            [400, 40],
            [500, 80],
        ];

        const area = d3.area();
        // .y0(100);

        const areaData = area(data);

        const areaChart = d3
            .select('#area')
            .append('svg');

        areaChart
            .attr('style', 'background: #fafafa')
            .attr('width', 500)
            .attr('height', 120)
            .append('g')
            .append('path')
            .attr('fill', '#999')
            .attr('stroke', '#000')
            .attr('d', areaData);



    }
    render() {
        return <div id="area"></div>
    }
}