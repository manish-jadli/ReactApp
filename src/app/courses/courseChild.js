import React from 'react';
import '../courses/courses.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            courseid: '',
            coursename: '',
            coursefromdate: '',
            coursetodate: '',
            coursefee: '',
            courseimage: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            courseid: nextProps.courseid,
            coursename: nextProps.coursename,
            coursefromdate:nextProps.coursefromdate,
            coursetodate:nextProps.coursetodate,
            coursefee:nextProps.coursefee,
            courseimage:nextProps.courseimage
        });
    }

    courseidHandler(e) {
        this.setState({ courseid: e.target.value });
    }

    coursenameHandler(e) {
        this.setState({ coursename: e.target.value });
    }

    coursefromdateHandler(e) {
      this.setState({ coursefromdate: e.target.value });
  }

  coursetodateHandler(e) {
      this.setState({ coursetodate: e.target.value });
  }

  coursefeeHandler(e) {
    this.setState({ coursefee: e.target.value });
}

courseimageHandler(e) {
    this.setState({ courseimage: e.target.value });
}

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Course</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="form-group">
                              <label className="control-label">Course Id:</label>
                            <div className="form-group">
                            <input type="number" className="form-control" value={this.state.courseid} onChange={(e) => this.courseidHandler(e)} />
                            </div>
                            </div>

                            <div className="form-group">
                              <label className="control-label">Course Name:</label>
                              <div className="form-group">
                              <input type="text" className="form-control" value={this.state.coursename} onChange={(e) => this.coursenameHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">From Date:</label>
                              <div className="form-group">
                              <input type="date" className="form-control" value={this.state.coursefromdate} onChange={(e) => this.coursefromdateHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">To Date:</label>
                              <div className="form-group">
                              <input type="date" className="form-control" value={this.state.coursetodate} onChange={(e) => this.coursetodateHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">Course Fee:</label>
                              <div className="form-group">
                              <input type="number" className="form-control" value={this.state.coursefee} onChange={(e) => this.coursefeeHandler(e)} />
                              </div>
                              </div>

                              <div className="form-group">
                              <label className="control-label">Course Image:</label>
                              <div className="form-group">
                              <input type="text" className="form-control" value={this.state.courseimage} onChange={(e) => this.courseimageHandler(e)} />
                              </div>
                              </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;