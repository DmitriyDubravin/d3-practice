import React, {Component} from 'react';
import * as d3 from "d3";

export default class Donut extends Component {
    componentDidMount() {

        const s = 500;
        const r = s / 2;

        const arc = d3
            .arc()
            // .startAngle(0)
            // .endAngle(2 * Math.PI)
            .outerRadius(r - 50)
            .innerRadius(r - 150)
            .padAngle(.02)
            .padRadius(100)
            .cornerRadius(4);

        const data = [
            {n: 'A', x: 10},
            {n: 'B', x: 40},
            {n: 'C', x: 30},
            {n: 'D', x: 20},
            {n: 'E', x: 60},
            {n: 'F', x: 80}
        ];

        const pie = d3
            .pie()
            // .padAngle(.02)
            .value(function(d) {return d.x})
            .sort(null);

        const pieData = pie(data);

        const g = d3
            .select('#donut')
            .append('svg')
            .attr('width', s)
            .attr('height', s)
            .append('g')
            .attr('transform', `translate(${r},${r})`);

        // segments
        g
            .selectAll('path')
            .data(pieData)
            .enter()
            .append('path')
            .attr('fill', '#fc0')
            .attr('d', arc);

        // label
        g
            .selectAll('text')
            .data(pieData)
            .enter()
            .append('text')
            .each(function(d) {
                let centroid = arc.centroid(d);
                d3.select(this)
                    .attr('x', centroid[0])
                    .attr('y', centroid[1])
                    .attr('dy', '0.33em')
                    .text(d.data.n + ': ' + d.data.x)
            });
            // .attr('x', function(d) {return arc.centroid(d)[0]})
            // .attr('y', function(d) {return arc.centroid(d)[1]})
            // .attr('dy', '0.33em')
            // .text(function(d) {return d.data.n + ': ' + d.data.x});
    }
    render() {
        return <div id="donut"></div>
    }
}