import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            By day a DevOps Engineer, by night a civic hacker with a mind 
            for change. I create web applications to support organizations 
            trying to make an impact, including Code for America and its
            local brigade Code for Atlanta. At my job, I regularly 
            participate in competitions to pitch effective solutions to 
            industry challenges to execs.
          </p>
          <p>
            On the side, I'm an alumni board member for the coding bootcamp
            that started my tech journey; I cohost a podcast on breaking into
            the tech field and mastering the job hunt; and I coordinate study
            groups for coding newbies.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>

          <hr></hr>

          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>

          <hr></hr>

          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <h3>Skills</h3>
          <ul className="icons">
            <li>AWS Certified</li>
            
            <li>Javascript, Node, React</li>
            
            <li>Jenkins, Ansible, Docker, Kubernetes</li>
              {/* <a href="#" className="icon fa-twitter"></a> */}
            
          </ul>
          <hr></hr>

          <h3>Experience</h3>
          <h4>Application Development Associate</h4>
          <h5>Accenture</h5>
          <h6>Feb 2020 - Present</h6>
          <ul>
            <li>Perform software development, operations and maintenance tasks in support of 15+ applications</li>
            <li>Maintain, script and improve automated deployment systems</li>
            {/* <li>Perform configuration changes</li> */}
            <li>Manage, deploy, and configure 7 applications in private cloud</li>
            <li>Script deliverables instructing team on application deployments and configuration updates</li>
          </ul>

          <hr></hr>

          <h4>Web Development Teaching Assistant</h4>
          <h5>Trilogy</h5>
          <h6>Nov 2019 - Feb 2020</h6>
          <ul>
            <li>Lead classroom discussions, guided inquiry, emphasized the meta-skills and core concepts of software engineering</li>
            <li>Supported students in their projects, challenges, and understanding of the curriculum</li>
            <li>Provided feedback to students and fellow instructional staff in order to ensure the most effective and informative class sessions</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/erinwithanAyy"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/erin-borders/" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/erinborders/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/erinborders"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
