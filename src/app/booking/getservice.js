import React from 'react';


class GetService extends React.Component{
  constructor(props){
    super(props);
    this.state={
      active:false,
      getserviceDatas:[
        {id:1,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false},
        {id:2,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false},
        {id:3,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false},
        {id:4,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false},
        {id:5,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false},
        {id:6,couier:'Hermes', chargeableWeight:'UK Domestic',transitTime:'1-2 Days',serviceType:'Next Day',price:'N/A',fuelSurcharge:'N/A',totalEstimatedPrice:'N/A', active:false}
      ]
    }
  }
    render(){
//let getserviceDatas=this.state.getserviceDatas;
        return(

          <section>



<section>
                  <div className="modal" id="getService">
  <form className="was-validated">
    <div className="modal-dialog modal-lg" id="getservice-font">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Get Service</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">

       <div className="form-group">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-1">Courier</div>
                <div className="col-2">Chargeable Weight</div>
                <div className="col-1">Transit Time</div>
                <div className="col-2">Service Type</div>
                <div className="col-1">Price</div>
                <div className="col-2">Fuel Surcharge</div>
                <div className="col-2">Total Estimated Price</div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="card-body">
          {this.state.getserviceDatas.map((getserviceData, i)=>
               <div className="row" key={i}>
               <div className="col-1 text-danger">{getserviceData.couier}</div>
               <div className="col-2">{getserviceData.chargeableWeight}</div>
               <div className="col-1">{getserviceData.transitTime}</div>
               <div className="col-2">{getserviceData.serviceType}</div>
               <div className="col-1">{getserviceData.price}</div>
               <div className="col-2">{getserviceData.fuelSurcharge}</div>
               <div className="col-2">{getserviceData.totalEstimatedPrice}</div>
               <div className="col-1">Action <span className="caret"></span></div>
             </div>
          )}
            </div>
            </div>
        </div>
  


        </div> 
        <div className="modal-footer">
        <button type="submit" className="btn btn-primary float-right">Submit</button>
          <button type="button" className="btn btn-danger float-left" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
    </form>
  </div>
  

            </section>
        
        </section>
        
        )
    }
}

export default GetService;