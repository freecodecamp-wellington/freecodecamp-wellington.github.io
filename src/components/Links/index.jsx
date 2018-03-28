import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      linkedin: author.linkedin,
      twitter: author.twitter,
      github: author.github
    };

    return (
      <div className="links">
        <ul className="links__list">
          {/* <li className="links__list-item">
            <a href={`https://www.twitter.com/${links.twitter}`} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li> */}
          <li className="links__list-item">
            <a href={`https://www.github.com/${links.github}`} target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          {/* <li className="links__list-item">
            <a href={`https://www.linkedin.com/in/:${links.linkedin}`}>
              <i className="icon-linkedin" />
            </a>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Links;
