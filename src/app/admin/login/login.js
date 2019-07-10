import React from 'react';
import '../login/login.css';
//import Home from '../../home/home';


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={
          act:0,
          index:'',
          datas:[]
        };
    }


  fSubmit=(e)=>{
    e.preventDefault();
    console.log('Key');
    let datas=this.state.datas;
    let username=this.refs.username.value;
    let password=this.refs.password.value;
    let remember=this.refs.remember.value;

    if(this.state.act===0){
      let data={ username,password, remember}
      datas.push(data);
    }else{
      let index=this.state.index;
      datas[index].username=username;
      datas[index].password=password;
    }

    this.setState({
      datas:datas,
      act:0
    });

    this.refs.myLoginForm.reset();
    this.refs.username.focus();
  }

  fRemove=(i)=>{
    let datas=this.state.datas;
    datas.splice(i,1);
    this.datas=datas;

    this.setState({
      datas:datas
    })

    this.refs.myForm.reset();
    this.refs.name.focus();

  }

  fEdit=(i)=>{
    let data=this.state.datas[i];
    this.refs.name.value=data.name;
    this.refs.address.value=data.address;

    this.setState({
      act:1,
      index:i
    });

    this.refs.name.focus();
  }

  componentDidMount(){
    console.log(this.state.datas);
  }


        render(){
          let datas=this.state.datas;
            return(
                <section>
                
                <div className="modal" id="login">
               
                  <div className="modal-dialog">
              
                    <div className="modal-content">
                 
                      <div className="modal-header">
                        <h4 className="modal-title">Login</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      
                      <div className="modal-body">
                      <form className="was-validated" ref="myLoginForm" noValidate>
                <div className="form-group">
                  <label>Username:</label>
                  <input type="text" className="form-control" ref="username"  id="uname" placeholder="Enter username" name="uname" required />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input type="password" className="form-control" ref="password" id="pwd" placeholder="Enter password" name="pswd" required />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" ref="remember"  checked={this.state.remember} type="checkbox" id="remember" name="remember" required /> I agree on blabla.
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Check this checkbox to continue.</div>
                  </label>
                </div>
            
                      <div className="modal-footer">
                      <button type="button" className="btn btn-primary float-right" onClick={(e)=>this.fSubmit(e)}>Submit</button>
                        <button type="button" className="btn btn-danger float-left" data-dismiss="modal">Close</button>
                      </div>
                     
                      <br/><br/>
                      <div>
  {datas.map((data,i)=><ul className="list-unstyled">
    <li key={i} className="list-group">
<div className="list-group-items col-12 row clearfix">
      <div className="col-2">{i+1}. {data.username}</div>
      <div className="col-2">{data.password}</div>
      <div className="col-2">{data.remember}</div>
      <div className="col-3">
      <button type="button" className="btn btn-info col-12">Edit</button>
      </div>
      <div className="col-3">
      <button type="button" className="btn btn-danger col-12">Remove</button>
      </div>
    </div>
    </li>
    </ul>
    )}
</div>
                      
                      </form>
                    </div>
                   
                  </div>
  
                </div>
              </div>

              </section>

            );

        }

}

export default Login;