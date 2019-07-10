import React from 'react';
import UserDetail from '../../container/user-detail';
import UserList from '../../container/user-list';


const Stores=()=>{
    return(
        <section className="container">
            <section>
            <div id="pageNotFound">User Name from Redux Store:</div>
            <div><UserList /></div>
            </section>
            <hr/>
            <section>
            <div id="pageNotFound">User Details from Redux Store:</div>
            <div><UserDetail /></div>
            </section>
        </section>
    )
}

export default Stores;