
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxDataPoint = Math.max(...dataPointValues);
    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxDataPoint} label={dataPoint.label}/>)}
    </div>
};

export default Chart;