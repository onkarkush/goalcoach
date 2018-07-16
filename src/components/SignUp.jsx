import React,{ Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:{message:''}
        }
        
        this.SignUp = this.SignUp.bind(this)
    }

    SignUp(){
        //console.log("Sign up function State",this.state)
        const {email,password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
        .catch(error=>{
            console.log("Error at SignIp",error);
            this.setState({error})
        })
    }
    render(){
        return(
            <div className="form-inline">
            <h2>   SignUp </h2>
            <input className="form-control" 
                type="text" 
                placeholder="email" 
                onChange = {(event)=> this.setState({email:event.target.value})}/>
            <input 
                className="form-control" 
                type="password" 
                placeholder="password"
                onChange = {(event)=> this.setState({password:event.target.value})}/>
            <button className="btn btn-primary" onClick = {this.SignUp}>Sign Up</button>

            <div> {this.state.error.message}</div>
            <div><Link to="/SignIn">Already user? Sign In here</Link></div>
            </div>
        )
    }

}

export default SignUp;