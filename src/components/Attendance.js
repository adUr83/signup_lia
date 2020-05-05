import React, { Component } from 'react'


import Consumer from '../context'
 class Attendance extends Component {

    state = {

        decision : "",
        reason : "",

    }

    formatter = () =>{

        const {curUser} = this.props
    
        return (
            <div>
        <div className = "font-weight-bold">{ `${curUser.name.toUpperCase()}  ${curUser.surname.toUpperCase()} `}</div>
        <div> { `${curUser.email}`}</div>
            </div>

        )
    }

    goToInvitationsPage = (dispatch) =>{

        dispatch({type : "CHANGE_PAGE"})
    }
     
    handleChange = (e) =>{

         const name= e.target.name
         const value = e.target.value
         this.setState({
            [name] : value
         })
        // console.log(this.state.reason)
         //console.log(this.state.decision)
    }

    updateUser = (dispatch) =>{

        
      
        const {decision, reason} = this.state
        
        if(decision !== "")
        {
           
           
            dispatch({type : "UPDATE_CURRENT_USER_STATUS" ,payload : {  decision,  reason}})
            dispatch ({type : "CHANGE_PAGE"})
        }
        else alert("PLEASE UPDATE YOUR STATUS 😅")
       
    }

    render() {
 
        return(
        <Consumer>
            {
                value => {
                    const {dispatch} = value
                    const {reason} = this.state
                    return (
                        <div className = "container mt-5" >
                            <div className="card bg-warning ">
                                <div style = {{color : "black"}} className="card-header ">
                                    <div className = "d-flex  justify-content-center">
                                        <div  className = "d-flex flex-column text-center">
                                            {    
                                            this.formatter()
                                            }
                                         <div className="card-title mt-5">Are you attending this event ?</div>
                                         <div className = "d-flex  justify-content-around">
                                             
                                             <div className = "d-flex  flex-column">
                                                <label htmlFor="yes">YES</label>
                                                <input onClick = {this.handleChange} style = {{width : "20px" , height : "20px"}} type="radio"  name="decision" value = "yes"  />
                                             </div>
            
                                             <div className = "d-flex  flex-column">
                                               <label htmlFor="maybe">MAYBE</label>
                                               <input onClick = {this.handleChange} style = {{width : "20px" , height : "20px"}} type="radio"  name="decision" value = "maybe" />
                                             </div>
            
                                             <div className = "d-flex  flex-column">
                                                <label htmlFor="no">NO</label>
                                                <input onClick = {this.handleChange} style = {{width : "20px" , height : "20px"}} type="radio"  name="decision" value = "no" />  
                                             </div>
                                              
                                             
                                         </div>
                                          
                                        </div>
                                       
                                    </div>
                                    <div className="card-body">
                                         <p>Comment</p>
                                         <textarea onChange = {this.handleChange} value = {reason} name = "reason" placeholder = "Write your reason..."  rows="4" cols="30"/>
                                         <div >
                                            <button  onClick = {this.updateUser.bind(this,dispatch)} className="btn btn-primary" type="button">Save</button>
                                            &nbsp;&nbsp;
                                            <button  onClick = {this.goToInvitationsPage.bind(this,dispatch)} className="btn btn-secondary" type="button">Cancel</button>
                                        </div>
                                    </div>     
                                </div>
                            </div>
                        </div>
                    )

                }
            }
        </Consumer>
        )
       
    }
}

export default Attendance;
 