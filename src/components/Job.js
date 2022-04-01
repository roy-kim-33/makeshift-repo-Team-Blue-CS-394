import React, { Component } from 'react'

const Job = ({job}) => {
    return (
        <div className="FILLER">
            <div> {job.title} </div>
            <div> {job.pay} </div>
            <div> {job.term} </div>
            <div> {job.location} </div>
        </div>
    )
}

export default Job