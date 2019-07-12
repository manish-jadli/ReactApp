import React from 'react';
import {Helmet} from 'react-helmet';
import { Link} from 'react-router-dom';
import axios from 'axios';
import '../courses/courses.css';
import CoursesData from '../../data/courses.json';
import Modal from './courseAddEdit';
import {Dropdown} from 'react-bootstrap';
import CourseShow from './courseShow';



class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = { courseDetail: CoursesData, act:0, active:false, courseFormDatas:[
      {id:'',coursename:'Manish',coursefromdate:'',coursetodate:'',coursefee:'',courseimage:null}
    ],  requiredItem: 0 };
    this.courseSubmit=this.courseSubmit.bind(this);
    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);

       
  }


  home = () => {
    alert('You have redirect to home screen.');
    this.props.history.push("");
  };

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.courseFormDatas;
    tempbrochure[requiredItem] = item;
    this.setState({ courseFormDatas: tempbrochure });  
  }

  deleteItem=(id)=> {
    alert('You have deleted this record for this id' + `${id}`);
    // let tempBrochure = this.state.courseFormDatas;
    // tempBrochure.splice(index, 1);
    // this.setState({ courseFormDatas: tempBrochure });
    axios.delete(`http://localhost:3000/courseDatas/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  
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

  let id=this.refs.id.value;
  let coursename=this.refs.coursename.value;
  let coursefromdate=this.refs.coursefromdate.value;
  let coursetodate=this.refs.coursetodate.value;
  let coursefee=this.refs.coursefee.value;
  let courseimage=this.refs.courseimage.value;
  let couseformdata={id,coursename,coursefromdate,coursetodate,coursefee,courseimage};
  
  axios.post('http://localhost:3000/courseDatas/',couseformdata)
    .then(res=>{
      console.log(res);
    });
  
  // courseFormDatas.push(couseformdata);

  this.setState({
    courseFormDatas:courseFormDatas,
    act:0
  });

  this.refs.courseForm.reset(); 
  }

  componentDidUpdate(){
    const courseFormDatas= this.state.courseFormDatas;
    console.log(courseFormDatas);
  }

  componentDidMount(){
    axios.get('http://localhost:3000/courseDatas/')
    .then(res=>{
      const courseFormDatas = res.data;
      this.setState({ courseFormDatas });
      console.log(res);
    });
  }

  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }



 
    render() {

  
     
const course = this.state.courseFormDatas.map((item, index) => {
      return (

        <div className="form-group" key={index}>
              <div className="row col-12">
              <div className="col-1"><Link to={ {
  pathname: `/courses/${item.id}`,
  search: '?sort=asc',
  hash: '#hash',
  state: { courseFormDatas: true }
} }>{item.id}</Link></div>
              <div className="col-2">{item.coursename}</div>
              <div className="col-2">{item.coursefromdate}</div>
              <div className="col-2">{item.coursetodate}</div>
              <div className="col-2">{item.coursefee}</div>
              <div className="col-2">
                {/* <img src={item.courseimage} className="thumbnail m-b-2" width="150px" height="50px"/> */}
                {item.courseimage}
              </div>
              <div className="col-1">
              <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              Actions
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item data-toggle="modal" data-target="#exampleModal" onClick={() => this.replaceModalItem(index)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => this.deleteItem(item.id)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
              </div>
              </div>
              </div>
      )
    });
    
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.courseFormDatas[requiredItem];
    return (
    <section>

                <Helmet>
                <title>Courses</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Course" />
                <meta name="keywords" content="Course, MjTech" />
                </Helmet>

      <div>
              <div className="container">
    <div id="pageNotFound">
    <span>Courses</span>
    </div>

    <div className="col-12 form-group">
      
    <div className="text-right form-group">
    <button type="button" onClick={this.home} className="btn btn-sm btn-warning">Redirect Home</button>
    </div>

    <form ref="courseForm" name="courseForm" noValidate>
<div className="row form-group">

  <div className="col-6 form-group">
    <div className="row">
    <label className="control-label col-4 lh-34">Id</label>
    <div className="col-8">
      <input type="number" ref="id" className="form-control" placeholder="Id" required />
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
      {/* <input type="file" ref="courseimage" className="form-control" placeholder="Image" required onChange={this.fileSelectedHandler} /> */}
      {/* <UploadPreview /> */}
      <section> 
        <div className="form-group">
        <input type="file" ref="courseimage" onChange={this.onChange} />
       </div>

        {this.state.file && (
           <div className="card">
          <div className="card-header">
            <button className="btn btn-danger col-12" onClick={this.resetFile}><i className="fa fa-trash"></i> Delete</button>
          </div>
          <div className="card-body">
        <img style={{ width: "100%" }} src={this.state.file} height="150px" />
        </div>
        </div>
        )}

      </section>
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


    </div>
          <div>

            <div className="form-group">
        <div className="card">
          <div className="card-header">
            <div className="row col-12">
              <div className="col-1">Id</div>
              <div className="col-2">Course Name</div>
              <div className="col-2">From Date</div>
              <div className="col-2">To Date</div>
              <div className="col-2">Course Fee</div>
              <div className="col-2">Course Image</div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="card-body">
          <div>
            {course}
            </div>
          </div>
        </div>
          </div>

          </div>



        </div>
        
        <Modal
          id={modalData.id}
          coursename={modalData.coursename}
          coursefromdate={modalData.coursefromdate}
          coursetodate={modalData.coursetodate}
          coursefee={modalData.coursefee}
          courseimage={modalData.courseimage}
          saveModalDetails={this.saveModalDetails}
        />
      
      </div>
   
   </section>
   )
    }
}


export default Courses;