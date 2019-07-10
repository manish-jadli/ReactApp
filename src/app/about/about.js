import React from 'react';
import '../about/about.css';
import aboutData from '../../data/about.json';




class About extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false, panelCollapse:false };
      }
    
      toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
      }
      panelToggle(){
        this.setState(state=>({panelCollapse:!state.panelCollapse}));
      }




    render(){

  return (
    <section className="container">
 <div id="pageNotFound">
    About us
    </div>

<div className="col-12">
      <div className="card form-group">
      <div className="card-header bg-dark text-white pointer" onClick={this.panelToggle.bind(this)}>1. Panel Collapse</div>
      <div className={"collapse card-body" + (this.state.panelCollapse ? ' in' : '')}>Yes! Panel collapse are working now.</div>
  </div>
  </div>

  
<br/>


    
    {aboutData.map((aboutDetail, index)=>{
      return <div className="col-12" key={index}>
      <div className="card form-group">
      <div className={aboutDetail.color} onClick={this.toggle} title={aboutDetail.title}>{aboutDetail.id}. {aboutDetail.header}</div>
      <div className={"collapse card-body" + (this.state.collapse ? ' in' : '')}>{aboutDetail.content}</div>
  </div>
  </div>
    })}


</section>
  );
}
}

export default About;
