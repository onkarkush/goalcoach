import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';
import { CompleteGoals } from '../action';

class CompleteGoalList extends Component{

componentDidMount(){

    completeGoalRef.on('value', snap =>{
        let completegoalsList = [];
        snap.forEach(completedgoals => {
            const { email, title } = completedgoals.val();
            completegoalsList.push({email,title});
        })
        
        this.props.CompleteGoals(completegoalsList)
    })

    
}

clearALLCompletedGoal(){
    completeGoalRef.set([])
}

render(){
    return(
        <div>
            { this.props.completedGoals.map( (completedGoals,index) =>{
                
                  return(
                      <div key = {index}>{completedGoals.title}<em>{completedGoals.email}</em></div>
                  )
                
            })}
            <button className="btn" onClick={this.clearALLCompletedGoal}>Clear All Goal List</button>
        </div>
    )
}
}

function mapStP(state){    
    console.log("completedGoals---",state);
    const  completedGoals  = state;
    return completedGoals;
}

export default connect(mapStP,{CompleteGoals})(CompleteGoalList);