import { COMPLETED_GOALS } from '../constants';

export default (state=[],action)=>{
    switch(action.type){
        case COMPLETED_GOALS:
       
        const { completegoalsList } = action;   
        return completegoalsList;
        default:
        return state;

    }
}