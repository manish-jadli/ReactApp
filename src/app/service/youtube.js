import React from 'react';
import {Helmet} from 'react-helmet';
import '../service/service.css';




class Youtube extends React.Component {

  constructor(props){
    super(props);
    this.state={active:false,youtubeDatas:[
      {id:1, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:2, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:3, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:4, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:5, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:6, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:7, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:8, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:9, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:10, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false},
      {id:11, name:'ReactJs', link:'https://youtu.be/GLSG_Wh_YWc',title:'ReactJs',header:'ReactJs',active:false}
    ]}
  }

 render(){
  return (

    <section>

                <Helmet>
                <title>Youtube Service</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Youtube Service" />
                <meta name="keywords" content="Youtube, Youtube Service, MjTech" />
                </Helmet>

    <section className="container">
         <div id="pageNotFound">
         <span>Youtube Service</span>
    </div>

    <div className="row col-12">
{this.state.youtubeDatas.map((youtube,i)=>{
     return <div className="col-6" key={i}>
      <div className="card form-group" title={youtube.title}>
        <div className="card-header"><b>Youtube : {youtube.header}</b></div>
        <div className="card-body">
          <div className="form-group">
          <iframe width="100%" height="240" src="https://www.youtube.com/embed/GLSG_Wh_YWc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
          <div className="bold"><b>Youtube : {youtube.name}</b></div>

</div>
      </div>
      </div>
})}

    </div>


</section>

</section>
  );
}
}

export default Youtube;
