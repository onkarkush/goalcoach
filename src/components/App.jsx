import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList  from './CompleteGoalList';

class App extends Component {
    constructor(props){
        super(props);

        this.propsOut = this.propsOut.bind(this)
    }
    
    

    signOut(){
        firebaseApp.auth().signOut()
    }

    propsOut(){
       console.log(this);
    }
    render(){
        return(
            <div style={{margin:"5px"}}>
                <h3>App</h3>
                <AddGoal/>
                <hr/>
                <h4>Goal List</h4>
                <GoalList/>
                <button className="btn btn-danger"
                onClick={this.signOut}>Sign out</button>

                <button className="btn btn-danger"
                onClick={this.propsOut}>propsOut</button>
                <CompleteGoalList/>
            </div>
        )
    }

}

function mapStoP(state){
    return state;
}

export default connect(mapStoP,null)(App);