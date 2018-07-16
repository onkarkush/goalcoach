import {combineReducers} from 'redux';
import users from './reducer_user';
import goals from './reducer_goals';
import completedGoals from './reducer_complete_goals';

export default combineReducers({
    users,
    goals,
    completedGoals
})