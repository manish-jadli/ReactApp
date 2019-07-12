import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
render(){

    if(!this.props.user){
        return (<h4>Please select a user...</h4>);      
        }

    return ( 
        <section className="container">
            <div className="col-4 row form-group">
                <img src={this.props.user.img} className="thumbnail" />
            </div>
            <div className="list-group">           
                <div className="list-group-item">
                <h4>Name: {this.props.user.name}</h4>
                <h4>Age: {this.props.user.age}</h4>
                <h4>Company: {this.props.user.company}</h4>
                <h4>Role: {this.props.user.role}</h4>
                <h4>Description: {this.props.user.description}</h4>
                </div>
            </div>
        </section>
    );
}

}

function mapStateToProps(state){
    return{
        user:state.activeUser
    };
}

export default connect (mapStateToProps) (UserDetail);