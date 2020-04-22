import React, { Component } from 'react'

 class Event extends Component {


    render() {
        const {title ,des ,dt ,loc} = this.props
        
        return (
            <div className="card text-center">
                <div  style = {{fontWeight : 'bold'}} className="card-header ">
                 {title}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{des}</h5>
                    <p className="card-text">Date and Time : {dt} <br/> Location : {loc}</p>
              
                </div>
          </div>
        )
    }
}
 
export default Event;