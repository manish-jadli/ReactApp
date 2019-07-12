import React from 'react';
import {Helmet} from 'react-helmet';
import '../pageNotFound/pageNotFound.css';



class PageNotFound extends React.Component {
    render() {
  return (
<section>

  
                <Helmet>
                <title>Page Not Found</title>
                <meta charset="UTF-8" />
                <meta name="description" content="MjTech Page Not Found" />
                <meta name="keywords" content="Page Not Found, Error, MjTech" />
                </Helmet>

<div className="container">
    <div id="pageNotFound">
    Oops! Page not found.
    </div>
</div>

</section>
  );
    }
}

export default PageNotFound;
