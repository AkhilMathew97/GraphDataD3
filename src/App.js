import React, {useEffect, useState}from 'react';
import BarChart from './components/Chart2.js'
import NavigBar from './components/Navig'
import LineChart from './components/LineChart'
import styles from './App.module.css'

const dataSet = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30],
    [20, 18, 29, 37, 60,25, 74, 90, 10, 50]
]
const lineDataSet=[
   [ 
        {"period": 1,   "value": 1.00},
        {"period": 2,   "value": 0.80},
        {"period": 3,   "value": 0.64},
        {"period": 4,   "value": 0.51},
        {"period": 5,   "value": 0.41},
        {"period": 6,   "value": 0.33},
        {"period": 7,   "value": 0.26},
        {"period": 8,   "value": 0.21},
        {"period": 9,   "value": 0.17},
        {"period": 10,  "value": 0.13}
    ],
    [
        {"period": 1,   "value": 0.03},
        {"period": 2,   "value": 0.19},
        {"period": 3,   "value": 0.29},
        {"period": 4,   "value": 0.46},
        {"period": 5,   "value": 0.32},
        {"period": 6,   "value": 0.76},
        {"period": 7,   "value": 0.14},
        {"period": 8,   "value": 0.89},
        {"period": 9,   "value": 0.80},
        {"period": 10,  "value": 1.00}
    ],
    [
        {"period": 1,   "value": 1.00},
        {"period": 2,   "value": 0.93},
        {"period": 3,   "value": 0.63},
        {"period": 4,   "value": 0.85},
        {"period": 5,   "value": 0.24},
        {"period": 6,   "value": 0.46},
        {"period": 7,   "value": 0.10},
        {"period": 8,   "value": 0.54},
        {"period": 9,   "value": 0.09},
        {"period": 10,  "value": 0.40}
    ]
  ]
var i=0

function App() {
    const [data, setData] = useState([])
    const [lData, setLData] = useState([])

    useEffect(()=>{
        changeBarData()
        changeLineData()
    },[])
    
    
    const changeBarData = ()=> {
        setData(dataSet[i++])   
        if(i===dataSet.length) i=0
    }
    const changeLineData = ()=> {
        setLData(lineDataSet[i++])   
        if(i===lineDataSet.length) i=0
    }
    
  return (
    <div className="container-fluid">
        <div className={styles.content}>

        
        <div className="row">
            <div className="col-12 text-center">
                <NavigBar />       
            </div>
        </div>
        <div className="row mx-xl-4 text-center">
            <div className="col-xs-12 col-xl-6 ">
                <div className="row mt-5 barborder">
                    <div className="col-12">
                        <h2 className="bartext">Simple Bar Graph</h2>
                        <button className="btn btn-dark" onClick={changeBarData}>Change Data</button>
                    </div>
                    <div className="col-12 mt-3 " >
                        <BarChart width={550} height={400} data={data} />
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-xl-6 ">
                <div className="row mt-5 lineborder">
                    <div className="col-12">
                        <h2 className="linetext ">Simple Line Graph</h2>
                        <button className="btn btn-dark" onClick={changeLineData}>Change Data</button>
                    </div>
                    <div className="col-12 mt-3 ">
                        {lData!==0 ? <LineChart data={lData}/>: null}
                    </div>
                
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
