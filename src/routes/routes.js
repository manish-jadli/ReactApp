import React from 'react';
import { Redirect, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from '../app/home/home';
import Service from '../app/service/service';
import About from '../app/about/about';
import Contact from '../app/contact/contact';
import PageNotFound from '../pageNotFound/pageNotFound';
import Courses from '../app/courses/courses';
import Netflix from '../app/service/netflix';
import Yahoo from '../app/service/yahoo';
import Youtube from '../app/service/youtube';
import Google from '../app/service/google';
import Booking from '../app/booking/booking';
import ConfirmBooking from '../app/booking/confirmBooking';
import RejectBooking from '../app/booking/rejectBooking';
import CourseShow from '../app/courses/courseShow';
import Stores from '../app/stores/stores';

class Routes extends React.Component{
    render(){
        return(<section>
            <Switch>
<Route path='/' exact component={Home}/>
<Route path='/service' exact component={Service}/>
<Route path='/about' exact component={About}/>
<Route path='/contact' exact component={Contact}/>
<Route path='/courses' exact component={Courses} />
<Route path='/netflix' exact component={Netflix}/>
<Route path='/google' exact component={Google}/>
<Route path='/youtube' exact component={Youtube}/>
<Route path='/yahoo' exact component={Yahoo}/>
<Route path="/booking" exact component={Booking} />
<Route path="/confirmBooking" exact component={ConfirmBooking} />
<Route path="/rejectBooking" exact component={RejectBooking} />
<Route path="/courses/:courseid" exact component={CourseShow} />
<Route path="/stores" exact component={Stores} />


<Route path='/course/:coursename' exact render={({match})=>(
  this.state.isLogedin ? (<user username={match.params.username} />) : (<Redirect  to='/' />)
)}/>
<Route component={PageNotFound} />
</Switch>
</section>
        )
    }
}

export default Routes;