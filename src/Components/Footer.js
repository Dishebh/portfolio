import React from 'react';

const Footer = props => {

  if (props.data) {
    var networks = props.data.social.map(function(network) {
      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
    })
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright 2020 Dishebh Bhayana</li>
            <li>Design by <a title="Styleshout" href="https://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back To Top" href="#home"><i className="fa fa-arrow-up"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
