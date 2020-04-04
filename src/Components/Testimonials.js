import React from 'react';

const Testimonials = props => {

  if (props.data) {
    var testimonials = props.data.testimonials.map(function(testimonial) {
      return (
        <li key={testimonial.user}>
          <blockquote>
            <p>{testimonial.text}</p>
            <cite>{testimonial.user}</cite>
          </blockquote>
        </li>
      );
    })
  }

  return (
    <section id="testimonials">

      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Quotes</span></h1>
          </div>
          <div className="ten columns flex-container">
            <ul className="slides">
              {testimonials}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Testimonials;
