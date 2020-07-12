import React,{useEffect,useRef} 		from 'react'
import * as d3	from 'd3'
import styles from './Chart1.module.css'

function Chart({width,height,data}){
  const hook = useRef();

  useEffect(() => {
    d3.selectAll("#lineChart").remove();
    draw();
}, [data]);

  var get_axis_x = (x,y,width,height) => {
    var axis = d3.axisBottom(x);
    axis.tickPadding(10).tickSizeOuter(10).tickSizeInner(10);
    return axis;
  };

  var get_axis_y = (x,y,width,height) => {
    var axis = d3.axisLeft(y);
    axis.tickPadding(10).tickFormat(d3.format(".0%")).ticks(4);
    return axis;
  };

  var get_grid_x = (x,y,width,height) => {
    var axis = d3.axisBottom(x);
    axis.tickSizeInner(-height+1).tickFormat("");
    return axis;
  };

  var get_grid_y = (x,y,width,height) => {
    var axis = d3.axisLeft(y);
    axis.tickSizeInner(-width).tickFormat("").ticks(4);
    return axis;
  };
	const draw = ()=> {
    var margin = {top: 15, right: 15, bottom: 25, left: 10};
    var width  = 550 - margin.left - margin.right;
	  var height = 300 - margin.top - margin.bottom;


    var x = d3.scaleLinear().range([0, width])  .domain(d3.extent(data,   function(d) { return d.period; }));
    var y = d3.scaleLinear().range([height, 0]) .domain([0, d3.max(data,  function(d) { return d.value; })]);

    var svg = d3.select(hook.current).append("svg")
                  .attr("preserveAspectRatio", "xMinYMin meet")
                  .attr("viewBox", "-40 0 600 400")
                  .classed("svg-content-responsive", true)
                  .attr("id","lineChart")

    var line = d3.line();
    line.curve(d3.curveBasis);
    line.x(function(d) { return x(d.period);  });
    line.y(function(d) { return y(d.value);   });

    var axis_x = get_axis_x(x,y,width,height);
    var axis_y = get_axis_y(x,y,width,height);
    var grid_x = get_grid_x(x,y,width,height);
    var grid_y = get_grid_y(x,y,width,height);
    
    var graph = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    graph.append("g").attr("transform", "translate(0," + height + ")").call(grid_x).attr("class",`${styles.grid}`);
    graph.append("g").call(grid_y).attr("class",`${styles.grid}`);
    graph.append("g").attr("transform", "translate(0," + height + ")").call(axis_x).attr("class",`${styles.axis}`);
    graph.append("g").call(axis_y).attr("class",`${styles.axis}`);
    graph.append("path").data([data]).attr("class", `${styles.line}`).attr("d", line);

	}
    	return (
			<div className={styles.linechart}>
        <svg ref={hook} height="500" width="550"></svg>
      </div>
          
    	)

};



export default Chart