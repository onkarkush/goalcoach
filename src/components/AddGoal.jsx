import React,{ Component } from 'react';
import { goalRef } from '../firebase';
import { connect } from 'react-redux'


class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state={
            title:''
            
        }

        this.addGoal = this.addGoal.bind(this)
    }
    
    addGoal(){
        const {title} = this.state;
        const {email} = this.props.users;
        goalRef.push({email,title})
        this.refs.addInput.value="";
        this.refs.addInput.focus();
    }
    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input className="form-control"
                    type="text"
                    placeholder="Add Goal"
                    ref="addInput"
                    onChange={event => this.setState({title:event.target.value})}
                    />

                    <button className="btn btn-success" onClick={this.addGoal}> Add
                        </button>
                </div>
            </div>
            )
        }
    
}

function mapStateToProps(state){
    const  user  = state;
    return user;
}
export default connect(mapStateToProps,null)(AddGoal);