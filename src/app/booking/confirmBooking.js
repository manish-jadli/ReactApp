import React from 'react';
import {Helmet} from 'react-helmet';

class ConfirmBooking extends React.Component{
    render(){

        return(

            <section>

                <Helmet>
                <title>Confirm Booking</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Confirm Booking" />
                <meta name="keywords" content="Confirm Booking, MjTech" />
                </Helmet>

            <section className="container">
            <div id="pageNotFound">
               <span>Confirm Booking</span>
               </div>
            <ConfirmDetail />
            </section>

            </section>
        )
    }
}


class ConfirmDetail extends React.Component{
render(){
return(
    <div className="form-group">
        <div className="list-group">
            <div className="list-group-item">
                <h4><span><i className="fa fa-check text-success"></i></span> You have <span className="text-success"><b>successfully submit</b></span> the form!</h4>
            </div>
        </div>
    </div>
)
}
}

export default ConfirmBooking;