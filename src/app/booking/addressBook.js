import React from 'react';
import AddNewAddres from './addNewAddress';

class AddressBook extends React.Component{
  constructor(props){
    super(props);
    this.state={
      active:false,
      addressBookDatas:[
        {id:1,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:2,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:3,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:4,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:5,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:6,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:7,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:8,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:9,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false},
        {id:10,favourites:'Yes',company:'IraSys Co. Ltd.',contactName:'Ram Chandra',address1:'Noida',city:'Noida, Indrapuram',state:'Uttar Pradesh',country:'India',active:false}

      ]
    };

    this.eraseAddressBookData=this.eraseAddressBookData.bind(this);
  }

  eraseAddressBookData=()=>{
    alert('You have removed all the address from the address book.')
    this.setState({
      addressBookDatas: this.state.addressBookDatas=[]
    })
  }
    render(){

        return(
<section>
  <AddNewAddres />
  <div className="modal" id="addressBook">
  <form>
    <div className="modal-dialog modal-lg" id="getservice-font">
      <div className="modal-content">
      
        <div className="modal-header">
          <h4 className="modal-title">Address Book</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div className="modal-body">

            <div className="form-group">
            <div className="row">
                <div className="col-6">
            <div className="row">
            <div className="col-4 lh-34">Address Type</div>
            <div className="col-8">
                <select className="form-control">
                    <option value="">Select Address</option>
                </select>
            </div>
            </div>
                    </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-success"  data-toggle="modal" data-target="#addAddressBook"><i className="fa fa-plus"></i> Add New Address</button>
                        </div>
                        <div className="col-6">
                            <button type="button" className="btn btn-danger float-right" onClick={this.eraseAddressBookData}><i className="fa fa-erase"></i> Erase All Address</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

       <div className="form-group">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-1">Favourites</div>
                <div className="col-2">Company</div>
                <div className="col-2">Contact Name</div>
                <div className="col-2">Address 1</div>
                <div className="col-2">City</div>
                <div className="col-1">State</div>
                <div className="col-1">Country</div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="card-body">
          {this.state.addressBookDatas.map((addressBookData,i)=>
            <div className="row" key={i}>
                <div className="col-1 text-danger">{addressBookData.favourites}</div>
                <div className="col-2">{addressBookData.company}</div>
                <div className="col-2">{addressBookData.contactName}</div>
                <div className="col-2">{addressBookData.address1}</div>
                <div className="col-2">{addressBookData.city}</div>
                <div className="col-1">{addressBookData.state}</div>
                <div className="col-1">{addressBookData.country}</div>
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
        )
    }
}

export default AddressBook;