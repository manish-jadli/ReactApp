import React from 'react';
import {Helmet} from 'react-helmet';
import '../courses/courses.css';

 


class CourseShow extends React.Component {
  constructor(props) {
    super(props);

}



render(){

  // console.log(props); 
   
  return (
<section>
                <Helmet>
                <title>Course Details</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Course Details" />
                <meta name="keywords" content="Course, Course Details, MjTech" />
                </Helmet>

<section className="container">
<div id="pageNotFound">
    <span>Courses Details</span>
    </div>

  <div>
    <p>Course ID: {this.props.match.params.courseid}</p>
    {/* <p>{this.state.coursename}</p> */}
  </div>

</section>

</section>
  )
  }
}

export default CourseShow;