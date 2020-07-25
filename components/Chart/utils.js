import { scaleLinear } from "d3";

export const createXScale = (signals, chartWidth) =>
  scaleLinear()
    .domain([0, signals.length - 1])
    .range([10, chartWidth - 30]);

export const createYScale = val =>
  scaleLinear().domain([val.min, val.max]).range([0, 370]);
