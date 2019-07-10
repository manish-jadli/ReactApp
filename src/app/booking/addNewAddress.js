import React from 'react';

class AddNewAddres extends React.Component{
  constructor(props){
    super(props);
    this.state={active:false};
  }

    render(){

        return(
<section>
                  <div className="modal" id="addAddressBook">
  <form>
    <div className="modal-dialog modal-lg" id="getservice-font">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Add Address Book</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">

            <div className="form-group row">
       
            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Company Name</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Company Name (Required)" required />
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Contact First Name</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Contact First Name (Required)" required />
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Contact Last Name</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Contact Last Name (Required)" required />
                </div>
                </div>
            </div>
     

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Country</label>
                <div className="col-8">
                    <select className="form-control">
                    <option value="">Country (Required)</option>
                    <option value="">United State of Kingdom</option>
                        </select>
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Address 1</label>
                <div className="col-8">
                    <textarea cols="3" rows="3"  className="form-control" placeholder="Address 1 (Required)" required></textarea>
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Address 2</label>
                <div className="col-8">
                    <textarea cols="3" rows="3"  className="form-control" placeholder="Address 2 (Required)" required></textarea>
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">City</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="City (Required)" required />
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Area</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Area (Required)" required />
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">State</label>
                <div className="col-8">
                    <select className="form-control" required>
                    <option value="">State (Required)</option>
                    <option value="0">Uttar Pradesh</option>
                    </select>
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Post/Zip Code</label>
                <div className="col-8">
                    <input type="text" className="form-control" placeholder="Post/Zip Code (Required)" required />
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Company Name</label>
                <div className="col-8">
                    <div className="row">
                        <div className="col-4">
                        <input type="text" className="form-control" placeholder="(+ 91)" required />
                        </div>
                        <div className="col-8">
                        <input type="text" className="form-control" placeholder="Telephone (Required)" required />
                        </div>
                        </div>
                </div>
                </div>
            </div>

            <div className="col-6 form-group">
                <div className="row">
                <label className="control-label lh-34 col-4">Email</label>
                <div className="col-8">
                    <input type="email" className="form-control" placeholder="Email (Required)" required />
                </div>
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
        )
    }
}

export default AddNewAddres;