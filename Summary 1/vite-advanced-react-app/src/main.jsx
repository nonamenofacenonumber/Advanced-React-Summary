import React, { Profiler } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
  // Aggregate or log render timings...
  console.table({id, phase, actualDuration, baseDuration, startTime, commitTime})
}


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Profiler id="profiler1" onRender={onRender}>
    <App />
  </Profiler>


  // </React.StrictMode>,
)
