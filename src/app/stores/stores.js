import React from 'react';
import {Helmet} from 'react-helmet';
import UserList from '../container/user-list';
import UserDetail from '../container/user-detail';

const Stores=()=>{
    return(

        <section>

                <Helmet>
                <title>Store</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Store" />
                <meta name="keywords" content="Store, Store Detail, MjTech" />
                </Helmet>

        <section className="container">
            <section>
            <div id="pageNotFound"><span>User Name from Redux Store:</span></div>
            <div><UserList /></div>
            </section>
            <hr/>
            <section>
            <div id="pageNotFound"><span>User Details from Redux Store:</span></div>
            <div><UserDetail /></div>
            </section>
        </section>

        </section>
    )
}

export default Stores;