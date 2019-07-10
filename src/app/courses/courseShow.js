import React from 'react';
import '../courses/courses.css';

 


const CourseShow=(props)=> {
console.log(props);    
  return (

<section className="container">
<div id="pageNotFound">
    Courses Details
    </div>

  <div>
    <p>Course ID: {props.match.params.courseid}</p>
  </div>

</section>
  )

}

export default CourseShow;