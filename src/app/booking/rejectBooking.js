import React from 'react'

class RejectBooking extends React.Component{
    render(){

        return( <section className="container">
            <div id="pageNotFound">
               Reject Booking
               </div>
               <RejectDetail />

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