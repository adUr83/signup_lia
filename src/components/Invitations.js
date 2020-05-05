import React, { Component } from 'react'

import User from './User'

 class Invitations extends Component {
    render() {
        const{users} = this.props;
        return (
                <div>
                    <ul  className="list-group">
                    {
                            users.map(user =>{ // tüm userları ekrana verdim
                                return(
                                <li key = {user.id} className="list-group-item list-group-item-warning">
                                <User reason = {user.reason} decision = {user.decision} id = {user.id} name = {user.name} surname = {user.surname}/>
                                </li>
                                )
                            
                            })
                    }
                    </ul>
                </div>
        )  
    }
}
export default Invitations;