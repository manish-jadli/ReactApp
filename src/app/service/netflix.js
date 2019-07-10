import React from 'react'
import '../service/service.css';


class Netflix extends React.Component {

  constructor(props){
    super(props);
    this.state={active:false,netflixDatas:[
      {id:1,header:'Netflix Data 1', article:'Yepee! Netflix Data Show',active:false},
      {id:2,header:'Netflix Data 2', article:'Yepee! Netflix Data Show',active:false},
      {id:3,header:'Netflix Data 3', article:'Yepee! Netflix Data Show',active:false},
      {id:4,header:'Netflix Data 4', article:'Yepee! Netflix Data Show',active:false},
      {id:5,header:'Netflix Data 5', article:'Yepee! Netflix Data Show',active:false}
    ]}

    this.collapseData=this.collapseData.bind(this);
  }

  collapseData(e){
    this.setState({active:!this.state.netflixDatas.active});
  }


 render(){
  return (
    <section className="container">
         <div id="pageNotFound">
    Netflix Service
    </div>
    <section>
      <div>
      {this.state.netflixDatas.map((netflixData,i)=>{
        return <div className="card form-group" key={i}>
            <div className="card-header" onClick={(e)=>this.collapseData(e)}><b>{netflixData.header}</b></div>
            <div className={"collapse card-body" + (this.state.active ? ' in' : '')}>{netflixData.article}</div>
          </div>
      })}
      </div>
    </section>
</section>
  );
}
}

export default Netflix;
