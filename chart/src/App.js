
import './App.css';
import {Line, getElementAtEvent} from 'react-chartjs-2';
import { useRef } from 'react';
import{
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
function App() {
  const data={
    labels:["Mon","tues","wednes"],
    datasets:[{
      label:"Weekdays",
      data:[30,33,65],
      borderColor:'aqua',
      tension:0.4
    }]
  }
  const chartRef=useRef();
  const handleClick=(event)=>{
    console.log("clicked");
    if(getElementAtEvent(chartRef.current,event).length>0){
      console.log(getElementAtEvent(chartRef.current,event));
    }
  };
  const options={};
  return (
    <>
    <div style={{width:"80%",padding:"2px"}}>
      <Line
      data={data}
      options={options}
      onClick={handleClick}
      ref={chartRef}
      ></Line>
    </div>
    </>
  );
}

export default App;
