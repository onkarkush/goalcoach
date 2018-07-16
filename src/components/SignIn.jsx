import React,{ Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:{message:''}
        }
        
        this.SignIn = this.SignIn.bind(this)
    }

    SignIn(){
        console.log("Sign up function State",this.state)
        const {email,password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .catch(error=>{
            console.log("Error",error);
            this.setState({error})
        })
    }
    render(){
        return(
            <div className="form-inline">
            <h2>   SignIn ! </h2>
            <input className="form-control" 
                type="text" 
                placeholder="email" 
                onChange = {(event)=> this.setState({email:event.target.value})}/>
            <input 
                className="form-control" 
                type="password" 
                placeholder="password"
                onChange = {(event)=> this.setState({password:event.target.value})}/>
            <button className="btn btn-primary" onClick = {this.SignIn}>Sign Up</button>
            <div> {this.state.error.message}</div>
            <div><Link to="/SignUp">Sign Up</Link></div>
            </div>
        )
    }

}

export default SignIn;