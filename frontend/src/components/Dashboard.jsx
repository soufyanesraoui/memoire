import React, { useState } from 'react'
import Chart from 'react-apexcharts'
import './Dashboard.css'

function App () {
  const [state, setState] = useState({
    options: {
      colors: ['#E91E63', '#FF9800'],
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [2014, 2015, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
      }
    },
    series: [
      {
        name: 'Alert Maintenance',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'Alert Security',
        data: [3, 60, 35, 80, 49, 70, 20, 81]
      }
    ]
  })
  return (
    <div className='App'>
      <h1>
        Main Dashboard <i class='fas fa-user'></i>{' '}
      </h1>
      <div className='row'>
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='bar'
            width='357'
          />
        </div>
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='line'
            width='357'
          />
        </div>
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='area'
            width='357'
          />
        </div>
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='radar'
            width='357'
          />
        </div>
        {/* <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="histogram"
            width="357"
          />
        </div> */}
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='scatter'
            width='357'
          />
        </div>
        <div className='col-4'>
          <Chart
            options={state.options}
            series={state.series}
            type='heatmap'
            width='357'
          />
        </div>
      </div>
    </div>
  )
}

export default App

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
