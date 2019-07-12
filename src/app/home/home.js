import React from 'react';
import {Helmet} from 'react-helmet';
import '../home/home.css';
//import homeData from '../../data/home.json';
import company1 from '../../img/company1.jpg';
import company2 from '../../img/company2.jpg';
import company3 from '../../img/company3.jpg';
//import Login from '../admin/login/login';



var mjTech='MjTech HighTech Pvt Ltd.';

class Home extends React.Component {

  constructor(props){
    super(props);

    this.state={open:false};
    this.toggle=this.toggle.bind(this);
  }

  toggle(e){
    this.setState({
      open:!this.state.open
    })
  }

  // componentDidMount(){
  //   console.log(this.state.datas);
  // }

  render(){
   //let datas=this.state.datas;
  return (

<section>


                <Helmet>
                <title>Home</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Home" />
                <meta name="keywords" content="Home, Default, MjTech" />
                </Helmet>

    <section>
<div id="demo" className="carousel slide" data-ride="carousel">
<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={company1} alt="html5" className="img-responsive" width="100%" height="500" />
    <div className="carousel-caption">
    <h3 className="text-warning">{mjTech}</h3>
    </div>   
  </div>
  <div className="carousel-item">
    <img src={company2} alt="css" className="img-responsive"  width="100%" height="500" />
    <div className="carousel-caption">
    <h3 className="text-warning">{mjTech}</h3>
    </div>   
  </div>
  <div className="carousel-item">
    <img src={company3} alt="Angular" className="img-responsive"  width="100%" height="500" />
    <div className="carousel-caption">
    <h3 className="text-warning">{mjTech}</h3>
    </div>   
  </div>
</div>
<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
<br/>
{/* <Login /> */}
<section className="container">
  {/* <div className="container">
  {datas.map((data,i)=>{
    return <div className="col-12" key={i}> 
     <div className="card form-group">
    <div>{data.username}</div>
    <div>{data.password}</div>
  </div>
  </div>
  })}
</div> */}
<div className="card-columns row">
  <div className="card bg-primary col-4">
    <div className="card-body text-center">
      <div className="card-text">
        <h3><span>Web Development</span></h3>
        <div>
        Irasys helps you redefine your online presence by crafting web applications that complement your company’s vision and effectively mirror your core competencies and strengths.
        </div>
      </div>
    </div>
  </div>
  <div className="card bg-warning col-4">
    <div className="card-body text-center">
      <div className="card-text">
        <h3><span>Mobile Development</span></h3>
        <div>
        Collaborate with Irasys to design, customize and shape avant-garde mobile applications to cater to your evolving business needs. Uniqueness amalgamated with innovation would give enterprise an edge to manoeuvre competition better.
        </div>
      </div>
    </div>
  </div>
  <div className="card bg-success col-4">
    <div className="card-body text-center">
      <div className="card-text">
        <h3><span>Software Development</span></h3>
        <div>
        Irasys deploys best in industry processes and technology frameworks to provide you with a rostrum to metamorphose your vision into actionable software development solutions.
        </div>
      </div>
    </div>
  </div>
  <div className="card bg-danger col-4">
    <div className="card-body text-center">
      <div className="card-text">
        <h3><span>IT Consulting</span></h3>
        <div>
        Our IT connoisseurs will help you- Identify and leverage your core competence to strengthen your foothold in the market, gain competitive intelligence to take informed business decisions, and keep tabs of the market pulse to better address the changing trends.
        </div>
      </div>
    </div>
  </div> 
  <div className="card bg-light col-4">
    <div className="card-body text-center">
      <div className="card-text">
        <h3><span>Third Party Integration</span></h3>
        <div>Third party integrations are being perceived as an indispensable component in gaining new market access. Partner with Irasys to boost your business and expand your reach with seamless third party integration. Our experts will help you plug-in the right channels to achieve the desired outcome.</div>
      </div>
    </div>
  </div>
</div>
</section>
<br/>
<br/>

</section>

</section>
  );
}
}

export default Home;
