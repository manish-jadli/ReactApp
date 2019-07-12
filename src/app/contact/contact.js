import React from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
//import teacher from '../../img/angular.png';
import '../contact/contact.css';
import ContactAddEdit from './contactAddEdit';
import {Dropdown} from 'react-bootstrap';




class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    // Initial state
    this.state = { open: false,show:false,seeProfile:false,index:'',act:0,requiredItem:0,
    datas:[
      {id:1,username:'manish jadli',email:'manishirasys@gmail.com',address:'noida',feedback:'good'}
    ]};
    
this.replaceModalItem=this.replaceModalItem.bind(this);
this.saveModalDetails=this.saveModalDetails.bind(this);

  }

  componentDidMount(){
    axios.get('http://localhost:3000/contactDatas/')
    .then(res=>{
      const datas = res.data;
      this.setState({ datas });
      console.log(res);
    });
  }

  componentDidUpdate(){
    let datas= this.state.datas;
    console.log(datas);
  }

  fSubmit=(e)=>{
    e.preventDefault();
    console.log('Key');
    let datas=this.state.datas;
    let id=this.refs.id.value;
    let username=this.refs.username.value;
    let email =this.refs.email.value
    let address=this.refs.address.value;
    let feedback=this.refs.feedback.value;

    // if(this.state.act===0){
      let data={id, username,address,email,feedback}
      // datas.push(data);
      axios.post('http://localhost:3000/contactDatas/',data)
      .then(res=>{
        console.log(res);
      });
    // }else{
    //   let index=this.state.index;
    //   datas[index].username=username;
    //   datas[index].email=email;
    //   datas[index].address=address;
    //   datas[index].feedback=feedback
    // }

    this.setState({
      datas:datas,
      act:0
    });

    this.refs.myForm.reset();
    this.refs.username.focus();
  }

  fEdit=(i)=>{
    let data=this.state.datas[i];
    this.refs.id.value=data.id;
    this.refs.username.value=data.username;
    this.refs.email.value=data.email;
    this.refs.address.value=data.address;
    this.refs.feedback.value=data.feedback;

    this.setState({
      act:1,
      index:i
    });

    //this.refs.myForm.reset();
    this.refs.username.focus();
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  replaceModalItem(index){
    this.setState({
      requiredItem:index
    });
  }

  deleteItem=(id)=>{
    // let tempbrochure=this.state.datas;
    // tempbrochure.splice(index,1);
    // this.setState({datas:tempbrochure});
    axios.delete(`http://localhost:3000/contactDatas/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
  }

  saveModalDetails(data){
    const requiredItem=this.state.requiredItem;
    let tempBrochure=this.state.datas;
    tempBrochure[requiredItem]=data;
    this.setState({datas:tempBrochure});
  }

  render() {


    const datas = this.state.datas.map((item, index) => {
      return (
   
        <div className="row col-12" key={index}>
        <div className="col-1">{item.id}</div>
        <div className="col-2">{item.username}</div>
        <div className="col-3">{item.email}</div>
        <div className="col-2">{item.address}</div>
        <div className="col-3">{item.feedback}</div>
        <div className="col-1">
        <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Actions
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item data-toggle="modal" data-target="#exampleModal" onClick={() => this.replaceModalItem(index)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => this.deleteItem(item.id)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>      
      )
    });



    const requiredItem=this.state.requiredItem;
    let modalData=this.state.datas[requiredItem];
  return (

    <section>
                <Helmet>
                <title>Contact</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Contact" />
                <meta name="keywords" content="Contact, Contact Detail, MjTech" />
                </Helmet>

    <section className="container">
 <div id="pageNotFound">
    <span>Contact us</span>
    </div>

{/* <div className="col-12 clearfix">
  <div className="col-12 clearfix">
  </div>
    <div>
      <div className="card form-group">
       <div className="card-header bg-dark text-white pointer" onClick={this.toggle.bind(this)}><i className={"fa" + (this.state.open ? ' in fa-minus-square-o' : ' fa-plus-square-o')}></i> Collapse Code</div>
        <div className={"collapse card-body" + (this.state.open ? ' in' : '')}>
        <div className="col-12 row clearfix">
            <div className="col-4">
            <div className="card-body">
    <img src={teacher} alt="Card image" className="img-responsive" width="100%" height="150" />
      <h4 className="card-title">John Doe</h4>
      <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="true" className="btn btn-primary text-white" onClick={this.seeProfile}>See Profile</a>
      </div>
      </div>
      <div  className="col-8">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
        </div>
      </div>
    </div>
</div> */}


{/* <div className="form-group col-12">
  <b>Length of data: {this.state.datas.length}</b>
</div> */}
<div className="form-group col-12">

<form ref="myForm" className="myForm">
<div className="row">

<div className="form-group col-6">
    <label className="control-label"><b>Id:</b></label>
<div className="form-group">
<input type="number" className="form-control" ref="id" placeholder="Enter ID"/>
</div>
</div>

  <div className="form-group col-6">
    <label className="control-label"><b>Username:</b></label>
<div className="form-group">
<input type="text" className="form-control" ref="username" placeholder="Enter Username"/>
</div>
</div>

<div className="form-group col-6">
    <label className="control-label"><b>Email:</b></label>
<div className="form-group">
<input type="email" className="form-control" ref="email" placeholder="Enter Username"/>
</div>
</div>

<div className="form-group col-6">
  <label className="control-label"><b>Address:</b></label>
<div className="form-group">
<input type="text" className="form-control" ref="address" placeholder="Enter address"/>
</div>
</div>

<div className="form-group col-6">
    <label className="control-label"><b>Feedback:</b></label>
<div className="form-group">
<textarea cols="4" rows="4" className="form-control" ref="feedback" placeholder="Enter Feedback"></textarea>
</div>
</div>

</div>
<div className="form-group">
<button type="button" className="btn btn-success col-12" onClick={(e)=> this.fSubmit(e)}>Submit</button>
</div>
</form>
<br/>

<div className="card">
  <div className="card-header">
    <div className="row col-12">
    <div className="col-1">Id</div>
      <div className="col-2">Username</div>
      <div className="col-3">Email</div>
      <div className="col-2">Address</div>
      <div className="col-3">Feedback</div>
      <div className="col-1"></div>
    </div>
  </div>
          <div className="card-body">
            {datas}
          </div>
        </div>

</div>

<ContactAddEdit
          id={modalData.id}
          username={modalData.username}
          email={modalData.email}
          address={modalData.address}
          feedback={modalData.feedback}
          saveModalDetails={this.saveModalDetails}
        />
</section>
  
  </section>
  
  )
}

}



export default Contact;


