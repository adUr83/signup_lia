import React ,{Component}from 'react';
import './App.css';


import {Event,Invitations,Attendance,EventCreator} from './components'


import Consumer from './context'


 class App extends Component {
    

  render() {
  
    return (
      <Consumer>
        {

          value =>{
            
            const {showInvitations,curUser,users} = value;  // page handler  and data

            const {eventInfo,showEventCreator} = value;  //event informations
             
            return (
              
             <div className = "container">
              
               {
                 showEventCreator 
                  ?<EventCreator/>  
                  : <div>
                     <Event  eventInfo = {eventInfo} /> 
                      {  
                       showInvitations
                       ? <Invitations users = {users}/>
                       : <Attendance curUser = {curUser}/>
  
                      }
                    </div>   
               }
               
                

             </div>              
            )
          } 

        }
      </Consumer>
      
    )
  }
}

export default App;