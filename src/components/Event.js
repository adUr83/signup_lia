import React, { Component } from 'react'

 class Event extends Component {


    render() {
        const {eventInfo} = this.props
        const {name,des ,date ,loc,startTime,endTime} = eventInfo
        
        return (
            <div className="card text-center">
                <div  style = {{fontWeight : 'bold'}} className="card-header ">
                 {name}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{des}</h5>
                    <p className="card-text">Date : {date} 
                    <br/> Start Time : {startTime}
                    <br/> End Time : {endTime} 
                    <br/> Location : {loc}</p>
              
                </div>
          </div>
        )
    }
}
 
export default Event;