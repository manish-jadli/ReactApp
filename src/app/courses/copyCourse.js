import React from 'react';
import '../courses/courses.css';
import CoursesData from '../../data/courses.json';
import Modal from 'react-modal';
 


class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courseDetail: CoursesData, act:0, active:false,courseFormDatas:[],  requiredItem: 0,
      brochure: [
        {
          title: "Gold",
          msg: "24k Bracelet"
        }, {
          title: "Silver",
          msg: "Necklace"
        }, {
          title: "Diamond",
          msg: "Ring"
        }
      ] };
    this.courseSubmit=this.courseSubmit.bind(this);
    this.removeData=this.removeData.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
  
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  courseSubmit=(e)=>{
    alert('You have submitted record successfully.');
    e.preventDefault();
    let courseFormDatas= this.state.courseFormDatas;

  let courseid=this.refs.courseid.value;
  let coursename=this.refs.coursename.value;
  let coursefromdate=this.refs.coursefromdate.value;
  let coursetodate=this.refs.coursetodate.value;
  let coursefee=this.refs.coursefee.value;
  let courseimage=this.refs.courseimage.value;
  let couseformdata={courseid,coursename,coursefromdate,coursetodate,coursefee,courseimage};
  courseFormDatas.push(couseformdata);
  this.setState({
    courseFormDatas:courseFormDatas,
    act:0
  });

  this.refs.courseForm.reset(); 
  }

  componentDidUpdate(){
    let courseFormDatas= this.state.courseFormDatas;
    console.log(courseFormDatas);
  }

    removeData=(i)=>{
      alert('You have deleted this record successfully.');
      let courseFormDatas=this.state.courseFormDatas;
      courseFormDatas.splice(i,1);
      this.courseFormDatas=courseFormDatas;
  
      this.setState({
        courseFormDatas:courseFormDatas
      })  
  }

    render() {
    
  return (
<div className="container">
    <div id="pageNotFound">
    Courses
    </div>

    <div className="col-12 form-group">
    <div className="text-right">
    <button type="button" data-toggle="modal" data-target="#courseChild" className="btn btn-sm btn-warning">Show Modal Data</button>
    </div>
    </div>
<form ref="courseForm" name="courseForm" noValidate>
<div className="row form-group">

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">Course Id</label>
    <div className="col-8">
      <input type="number" ref="courseid" className="form-control" placeholder="Course Id" required />
    </div>
    </div>
  </div>

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">Course Name</label>
    <div className="col-8">
      <input type="text" ref="coursename" className="form-control" placeholder="Course Name" required />
    </div>
    </div>
  </div>

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">From Date</label>
    <div className="col-8">
      <input type="date" ref="coursefromdate" className="form-control" placeholder="From Date" required />
    </div>
    </div>
  </div>

  <div className="col-6">
    <div className="row">
    <label className="control-label col-4 lh-34">To Date</label>
    <div className="col-8">
      <input type="date" ref="coursetodate" className="form-control" placeholder="To Date" required />
    </div>
    </div>
  </div>

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">Fee</label>
    <div className="col-8">
      <input type="number" ref="coursefee" className="form-control" placeholder="Fee" required />
    </div>
    </div>
  </div>

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">Image</label>
    <div className="col-8">
      <input type="text" ref="courseimage" className="form-control" placeholder="Image" required />
    </div>
    </div>
  </div>

</div>
<div className="col-12 form-group">
  <div className="text-right">
    <button type="button" className="btn btn-danger">Reset</button> &nbsp;
    <button type="button" className="btn btn-success" onClick={(e)=>this.courseSubmit(e)}>Submit</button>
    </div>
</div>
</form>

    {this.state.courseFormDatas.map((courseFormData,i)=>{
    return <div className="col-12" key={i}>
     <div className="card form-group">
    <div className="list-group">
      <div className={"list-group-item " + (courseFormData.courseid <= 18 ? 'bg-info': 'bg-default')}>
      <div className="row col-12 clearfix">
        <div className="col-1">{courseFormData.courseid}</div>
        <div className="col-2">{courseFormData.coursename}</div>
        <div className="col-2">{courseFormData.coursefromdate}</div>
        <div className="col-2">{courseFormData.coursetodate}</div>
        <div className="col-2">{courseFormData.coursefee}</div>
        <div className="col-2"><img width="100%" height="60px" src={courseFormData.courseimage} title={courseFormData.courseimage} alt={courseFormData.courseimage} className="round"/></div>
        <div className="col-1"><button type="button" className="btn btn-danger row" onClick={()=>this.removeData(i)}>Delete</button></div>
        </div>
      </div>
    </div>
  </div>

  </div>

  })}


const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{" "} - {" "}</td>
          <td>{item.msg}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>Editable Bootstrap Modal In React</h1>
          <h6>Bootstrap 4.0.0-beta.3</h6>
        </div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    )


</div>
  );

    }
}



export default Courses;