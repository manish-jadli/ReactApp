import React from 'react';
import '../signup/signup.css';


class Signup extends React.Component {

    render(){

        return (

            <section>
                  <div className="modal" id="signup">
  <form className="was-validated">
    <div className="modal-dialog">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Signup</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">
       
  <div className="form-group">
    <label>Username:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter Username" name="uname" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter Password" name="pswd" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group">
    <label>Confirm Password:</label>
    <input type="password" className="form-control" id="confPass" placeholder="Enter Confirm Password" name="confPass" required />
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" required /> I agree on blabla.
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Check this checkbox to continue.</div>
    </label>
  </div>
        </div> 
        <div className="modal-footer">
        <button type="submit" className="btn btn-primary float-right">Submit</button>
          <button type="button" className="btn btn-danger float-left" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
    </form>
  </div>
  

            </section>

            );

    }

}

export default Signup;