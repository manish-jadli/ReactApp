import React from 'react';
import {Helmet} from 'react-helmet';
import '../service/service.css';




class Yahoo extends React.Component {
    constructor(props){
      super(props);
      this.state={active:false,items:[],googleDatas:[
        {id:1,name:'Web Development', header:'Web Development', article:'MjTech helps you redefine your online presence by crafting web applications that complement your company’s vision and effectively mirror your core competencies and strengths.', active:false},
        {id:2,name:'Mobile App Development', header:'Mobile App Development', article:'Collaborate with Irasys to design, customize and shape avant-garde mobile applications to cater to your evolving business needs. Uniqueness amalgamated with innovation would give enterprise an edge to manoeuvre competition better.', active:false},
        {id:3,name:'Software Development', header:'Software Development', article:'MjTech deploys best in industry processes and technology frameworks to provide you with a rostrum to metamorphose your vision into actionable software development solutions.', active:false},
        {id:4,name:'IT Consulting', header:'IT Consulting', article:'Our IT connoisseurs will help you- Identify and leverage your core competence to strengthen your foothold in the market, gain competitive intelligence to take informed business decisions, and keep tabs of the market pulse to better address the changing trends.', active:false},
        {id:5,name:'Third Party Integration', header:'Third Party Integration', article:'Third party integrations are being perceived as an indispensable component in gaining new market access. Partner with Irasys to boost your business and expand your reach with seamless third party integration. Our experts will help you plug-in the right channels to achieve the desired outcome.', active:false}
      ]};
    }
  
    filterList(e){
      let updatedList = this.state.googleDatas;
      updatedList = updatedList.filter((i)=>{
        return i.name.toString().toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      })
      this.setState({items: updatedList});
    }

  
    componentDidMount(){
      this.setState({items: this.state.googleDatas})
    }
  
   render(){
    return (

      <section>

                <Helmet>
                <title>Yahoo Service</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Yahoo Service" />
                <meta name="keywords" content="Yahoo, Yahoo Service, MjTech" />
                </Helmet>

      <section className="container">
           <div id="pageNotFound">
           <span>Yahoo Service</span>
          </div>
  
  <section>
    <div className="form-group">
      <div className="form-group">
      <input type="text" className="form-control" placeholder="Search filter by header name" onChange={this.filterList.bind(this)} />
      </div>
      <List items={this.state.items}/>
    </div>
  </section>
  
  </section>

  </section>
    );
  }
  }
  
  class List extends React.Component{
    render(){
   
      const allItems = this.props.items.map((item,i)=>{
       
          return <section key={i}>
               <div className="list-group" title={item.header}>
                 <div className="list-group-item">
                   <h4>{item.name}</h4>
                   <div>{item.article}</div>
                 </div>
               </div>
           </section>
      })
   
      return(
        <div>
          {allItems}
        </div>
      )
    }

}

export default Yahoo;
