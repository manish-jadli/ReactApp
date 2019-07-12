import React from 'react';

class ClearGetService extends React.Component{
    render(){
        return(

          <section>

            <section>
              <div className="modal" id="clearGetService">
              <form className="was-validated">
                <div className="modal-dialog">
                  <div className="modal-content">
                  
                    <div className="modal-header">
                      <h4 className="modal-title">Clear Form</h4>
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <div className="modal-body">
              <div className="form-group">
                <label>Are you sure you want to clear the form?</label>
              </div>
                </div>

                <div className="modal-footer">
                    <div className="float-left">
        <button type="button" className="btn btn-success" data-dismiss="modal">Yes</button>
        </div>
        <div className="float-right">
          <button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
          </div>
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

export default ClearGetService;