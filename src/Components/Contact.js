import React from 'react';

const Contact = props => {

  if (props.data) {
    var name = props.data.name;
    var street = props.data.address.street;
    var city = props.data.address.city;
    var state = props.data.address.state;
    var zip = props.data.address.zip;
    var phone= props.data.phone;
    var message = props.data.contactmessage;

  }

  return (
    <section id="contact">

      <div className="row section-head">
        <div className="two columns head-col">
          <h1><span>Get In Touch</span></h1>
        </div>
        <div className="twn columns">
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">

          <form action="https://usebasin.com/f/35e500cce4d6" method="POST" id="contactForm" name="contactForm" data-netlify="true">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactName" name="contactName" required />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" required />
              </div>
              <div>
                <label htmlFor="contactSubject">Subject <span className="required">*</span></label>
                <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" required />
              </div>
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea name="contactMessage" cols="50" rows="15" id="contactMessage" required></textarea>
              </div>
              <div>
                <button type="submit" className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning">Error boy!!</div>
          <div id="message-success">
            <i className="fa fa-check"></i>
            Your message was sent. Thank you!
            <br />
          </div>

        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {name}<br />
              {street}<br />
              {city}, {state}, {zip}<br />
              <span>{phone}</span>
            </p>
          </div>

        </aside>

      </div>

    </section>
  );
}

export default Contact;
