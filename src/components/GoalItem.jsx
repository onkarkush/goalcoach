import React, { Component } from 'react';
import { connect } from 'react-redux';

import { goalRef,completeGoalRef } from '../firebase';

class GoalItem extends Component{ 
    constructor(props){
        super(props)
    this.CompleteGoal = this.CompleteGoal.bind(this);
    this.RemoveGoal = this.RemoveGoal.bind(this);
    }
    CompleteGoal(){
      const { email,title } = this.props.goal;
      const serverKey = this.props.goal.serverKey;
      goalRef.child(serverKey).remove();
      completeGoalRef.push({email,title})
    }

    RemoveGoal(){
        const { email,title } = this.props.goal;
        const serverKey = this.props.goal.serverKey;
        goalRef.child(serverKey).remove();
    }

render(){
    const {email,title}= this.props.goal;
    return(
       
      
        <div className="" style={{margin:"5px"}}>
        <strong>{title}</strong>
        <span><em>Submited by {email} </em></span>
        <button className="btn btn-default" onClick={this.CompleteGoal}>Complete</button>
        <button className="btn btn-default" onClick={this.RemoveGoal}>Remove</button>
        </div>
    )
}
}

function mapStoP(state){
    const { users } = state;
    return users
}

export default connect(mapStoP,null)(GoalItem);