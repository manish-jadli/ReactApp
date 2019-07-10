import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../../store/actions/index';



class UserList extends Component{
    createListItems(){
        return this.props.users.map((user)=>{
            return(
            <div className="list-group-item" onClick={()=>this.props.selectUser(user)} key={user.id}><b>{user.id}.</b> {user.name}</div>
            );
        });
    }

render(){

return(
    <section className="container">
        <div className="list-group">
        {this.createListItems()}
        </div>
    </section>
)

}

}

function mapStateToProps(state){
    return {users:state.users}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);