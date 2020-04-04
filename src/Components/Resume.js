import React from 'react';

const Resume = props => {

  if (props.data) {
    var skillMessage = props.data.skillmessage;
    var education = props.data.education.map(function(education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <div className="info">
            {education.degree}
            <span>&bull;</span>
            <em className="date">{education.graduated}</em>
            <p>{education.score}</p>
          </div>
        </div>
      );
    })
    var work = props.data.work.map(function(work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <div className="info">
            {work.title}
            <span>&bull;</span>
            <em className="date">{work.years}</em>
            <p>{work.description}</p>
          </div>
        </div>
      );
    })
    var skills = props.data.skills.map(function(skill) {
      var className="bar-expand " + skill.name.toLowerCase();
      return <li key={skill.name}><span style={{ width : skill.level }} className={className}></span><em>{skill.name}</em></li>
    })
  }

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{skillMessage}</p>
          <div className="bars">
            <ul className="skills">
              {skills}
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Resume;
