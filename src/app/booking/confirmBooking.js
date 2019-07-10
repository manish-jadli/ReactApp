import React from 'react'

class ConfirmBooking extends React.Component{
    render(){

        return(
            <section className="container">
            <div id="pageNotFound">
               Confirm Booking
               </div>
            <ConfirmDetail />
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