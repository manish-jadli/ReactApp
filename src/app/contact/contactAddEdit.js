import React from 'react';

class ContactAddEdit extends React.Component{
constructor(props){
super(props);
this.handleSave=this.handleSave.bind(this);
this.state={
    id:'',
    username:'',
    email:'',
    address:'',
    feedback:''
}
}

componentWillReceiveProps(nextProps){
this.setState({
    id:nextProps.id,
    username:nextProps.username,
    email:nextProps.email,
    address:nextProps.address,
    feedback:nextProps.feedback
});
}

handleSave(){
    const data=this.state;
    this.props.saveModalDetails(data);
}

idHandler(e){
    this.setState({id:e.target.value});
}

userHandler(e){
    this.setState({username:e.target.value});
}

emailHandler(e){
    this.setState({email:e.target.value});
}

addressHandler(e){
    this.setState({address:e.target.value});
}

feedbackHandler(e){
    this.setState({feedback:e.target.value});
}

render(){

    return(

        <section>


<section>
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Contact</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                        <div className="form-group">
                              <label className="control-label">Id:</label>
                            <div className="form-group">
                            <input className="form-control" value={this.state.id} onChange={(e) => this.idHandler(e)} />
                            </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label">Username:</label>
                            <div className="form-group">
                            <input className="form-control" value={this.state.username} onChange={(e) => this.userHandler(e)} />
                            </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label">Email:</label>
                              <div className="form-group">
                              <input className="form-control" value={this.state.email} onChange={(e) => this.emailHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">Address:</label>
                              <div className="form-group">
                              <input className="form-control" value={this.state.address} onChange={(e) => this.addressHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">Feedback:</label>
                              <div className="form-group">
                              <input className="form-control" value={this.state.feedback} onChange={(e) => this.feedbackHandler(e)} />
                              </div>
                              </div>
                              
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

</section>

</section>

    )

}

}

export default ContactAddEdit;