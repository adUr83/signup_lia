import React ,{Component}from 'react';
import './App.css';

import Event from './components/Event'
import Invitations from './components/Invitations'
import Attendance from './components/Attendance'

//import {Event,Invitations,Attendance} from './components'
import Consumer from './context'

 class App extends Component {
    

  render() {
  
    return (
      <Consumer>
        {

          value =>{
            
            const {showInvitations,curUser,users} = value;  // page handler  and data

            const {eTitle,eDes,eDateAndTime,eLoc} = value.eventInfo;  //event informations
             
            return (
              
             <div className = "container">
              
              <Event  title = {eTitle} des = {eDes} dt = {eDateAndTime} loc = {eLoc} />
                {  
                     showInvitations
                     ? <Invitations users = {users}/>
                     : <Attendance curUser = {curUser}/>

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