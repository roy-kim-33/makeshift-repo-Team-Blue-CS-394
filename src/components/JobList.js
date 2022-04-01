import React from 'react'
import Job from './Job.js'
const JobList = ({jobs}) => {
  return (
    <div className="FILLER">{jobs.map((j) => 
        <Job job={j} />
        )}</div>
  )
}

export default JobList
