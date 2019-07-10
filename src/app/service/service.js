import React from 'react'
import '../service/service.css';
import serviceData from '../../data/service.json';
import { Link} from 'react-router-dom'


class Service extends React.Component {

 render(){
  return (



    <section className="container">
         <div id="pageNotFound">
    Services
    </div>

<div className="col-12 clearfix">
</div>

<div className="col-12 row clearfix">
      {serviceData.map((serviceDetail, index)=>{
  return <div className="col-4" key={index}>
<div className="form-group">
<div className="card">
    <img src={serviceDetail.image} alt="Card image" className="img-responsive" width="100%" height="150" />
    <div className="card-body">
      <h4 className="card-title">{serviceDetail.title}</h4>
      <p className="card-text">{serviceDetail.content}</p>
        <div>
        <h4>Details:</h4>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/google">Google</Link></li>
          <li><Link to="/youtube">Youtube</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
        </ul>
        </div>
     
      {/* <Link className="btn btn-danger text-white">{serviceDetail.link}</Link> */}
    </div>
  </div>
</div>
</div>
})}

</div>










</section>
  );
}
}

export default Service;
