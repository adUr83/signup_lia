import React, { Component } from 'react'
const Context = React.createContext();

const reducer = (state,action) =>{
       switch(action.type)
       {
         case "ADD_GUEST" : {

          return {
            ...state,
            users : [...state.users, ...action.payload]
          }
         }
        case "CHANGE_VISIBILITY_EC" : 
        return {
          ...state,
          showEventCreator : !state.showEventCreator

        }
        case "ADD_EVENT" : 
        return {
          ...state,
          eventInfo : action.payload
        }
        case "CHANGE_PAGE": //sayfalar arası geçiş yapmak için
            return{
                ...state,
                showInvitations : !state.showInvitations
            }

        case "CHANGE_CURRENT_USER" : // attendance sayfasında olacak userı belirmek için
            return{
                ...state,
                curUser : state.users.find(user => action.payload === user.id)
            }
        case "UPDATE_CURRENT_USER_STATUS" : { // userın drumunu değiştirir
            
           const index = state.users.findIndex(user => user.id === state.curUser.id)
           const usersTemp = state.users
           usersTemp[index].decision = action.payload.decision
           usersTemp[index].reason = action.payload.reason

          return{
            ...state,
            users : [...usersTemp]
          }
  
        }
        
       default : 
        return state
      }

}
export  class Provider extends Component {


    state = {
        curUser : {}, //Attendance sayfasındaki user
        users : [
            {
              id : 1,
              name : "Mustafa Fırat",
              surname : "YILMAZ",
              email : "example1@gmail.com"
      
            },
            {
             id : 2,
             name : "Emre ",
             surname : "YILMAZ",
             email : "example2@hotmail.com"
      
           },
           {
             id : 3,
             name : "Murat",
             surname : "YILMAZ",
             email : "example3@outlook.com"
      
           }
          ],

           eventInfo : {
            name : "Event A",
            des : "Event description will be here",
            date : "21.04.2020",
            startTime : "00: 00",
            endTime : "17:15",
            loc : "Stockholm",
      
            },
            showEventCreator : true,
            showInvitations : true,
            dispatch : action =>{  
            this.setState(state =>reducer(state,action))
      } 

    }


    componentDidMount = () => {


         //TODO get data from API
        //......  

        const {users} = this.state  // Get comments when api is used
       
         // first decision boot
        users.forEach(user =>{
          user.decision = "Not responded"
          user.reason = ""
          })
        
       
        this.setState({
          users,
          // eventInfo : eventInfo   // Remove comment when api is used
        })
    
    }

    render() {
        return (
             <Context.Provider  value = {this.state}>
                {this.props.children}
             </Context.Provider>
        
        )
    }
}
 

const Consumer = Context.Consumer;

export default Consumer;