import React, { Component } from 'react'


import Consumer from '../context'
 class User extends Component {


    state = {

        reasonVisibility : false,
    }


    formatter = () =>{

     const {name,surname} = this.props;

    return <div >{ name.toUpperCase() + "  " + surname.toUpperCase() }</div>

      }

   goToEditPage = (dispatch,id) =>{

    dispatch({type : "CHANGE_PAGE"})
    dispatch({type : "CHANGE_CURRENT_USER" , payload : id })
   }
   
   getDecision = () =>{

         const {decision} = this.props;

        if(decision === "yes")
        {
            return <div className  = "d-flex justify-content-between" ><i  style = {{marginTop : "5px"}} className="fas fa-check"></i> <p style = {{marginLeft : "60px"}} > Attends</p></div>
        }
        else if(decision === "maybe")
        {
            return <div  className  = "d-flex justify-content-between" ><i style = {{marginTop : "5px"}} className="fas fa-question-circle"></i><p style = {{marginLeft : "60px"}} >Maybe</p></div>
        }
        else if(decision === "no")
        {
            return <div className  = "d-flex justify-content-between"  ><i   style = {{marginTop : "5px"}} className="fas fa-times-circle"></i><p style = {{marginLeft : "60px"}} >Can't</p></div>
        }
        else { // default not responded

            return <div className  = "d-flex justify-content-between"  ><i  style = {{marginTop : "5px"}} className="fas fa-sync"></i><p  style = {{marginLeft : "60px"}}>Not respondend</p></div>
        }


    }
    getReason = () =>{

        const {reason} = this.props

    return <div><p style ={{color : "#093EE9" , fontWeight : "normal"}} className="font-italic">{reason}</p></div>
    }

    showTheReason = () =>{
          
        const {reason} = this.props;
        if(reason !== "")
        {
            this.setState({
                reasonVisibility : !this.state.reasonVisibility
            })
        }
      
    }

    render() {
        return(
        <Consumer>
            {
                value =>{
                      const {dispatch} = value;
                      const {reasonVisibility} = this.state
                      const {id} = this.props;
                      return (
                        <div className="card">
                            <div  onClick = {this.showTheReason} style = {{color : "black"}} className="card-header">
                             <div  className = "d-flex justify-content-between">
                                <div >
                                {
                                    this.formatter() // isi soy isim yazdırmak için
                                    
                                }
                                </div>
                                <div >   
                                {
                                    this.getDecision() // adamın verdiği kararı almak için
                                } 
                                </div>
                                
                             <div ><i onClick = {this.goToEditPage.bind(this,dispatch,id)} style = {{cursor : 'pointer'}} className="fas fa-edit"></i></div>
                             </div>
                            </div>
                            <div>
                                { 
                                    reasonVisibility
                                    ?   <div className="card-body">
                                        {
                                            
                                            this.getReason()
                                    
                                        }
                                        </div>

                                    : null    
                                }
                                
                            </div>
                        </div>
                        )

                }
            }
        </Consumer>
        )
    }
}

export default User ;
