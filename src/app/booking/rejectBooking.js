import React from 'react';
import {Helmet} from 'react-helmet';

class RejectBooking extends React.Component{
    render(){

        return( 
        <section>


                <Helmet>
                <title>Reject Booking</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Reject Booking" />
                <meta name="keywords" content="Reject Booking, MjTech" />
                </Helmet>

        <section className="container">
            <div id="pageNotFound">
               <span>Reject Booking</span>
               </div>
               <RejectDetail />

            </section>

            </section>
        )
    }
}

class RejectDetail extends React.Component{
    render(){
    return(
        <div className="form-group">
            <div className="list-group">
                <div className="list-group-item">
                    <h4><span><i className="fa fa-check text-danger"></i></span> You have <span className="text-danger"><b>successfully reject</b></span> the form!</h4>
                </div>
            </div>
        </div>
    )
    }
    }

export default RejectBooking;