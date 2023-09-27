import React , {Component} from 'react'
import  './CSS/footer.css'
import Logohellocode from '../assets/images/Home/logohello.png'
class Footer extends Component {
    render(){
        return(
            <>
                 <footer className="footer-section">
         <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Logohellocode} alt="logo" className="logo" />
            </div>
            <div className="col-10">
          <div className="d-flex justify-content-between">
            <ul className="list-footer">
              <li>Quicks links</li>
              <li>Students</li>
              <li>School</li>
              <li>Countries</li>
              <li>Teachers</li>
              <li>Our Clients</li>
              <li>Testimonials</li>
              </ul>
            <ul className="list-footer">
              <li>Home</li>
              <li>The Journey</li>
              <li>Statistics</li>
              <li>Testimonials</li>
              <li>Our Partners</li>
              
            </ul>
            <ul className="list-footer">
              <li>ABOUT US</li>
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Achievements</li>
              
            </ul>
            <ul className="list-footer">
              <li>Join</li>
              <li>Become a Sponsor</li>
              <li>Adopt HelloWorldKi ds Curriculum</li>
              </ul>
            <div className="list-footer">
            <h1 className="main-title">Our Services</h1>
              <div>Smoothy</div>
              <div>HelloCode</div>
              <div>Development</div>
              <div>Coding Certification</div>
            </div>
            <div className="list-footer">
              <h1 className="main-title">Follow Us</h1>
              <div>Students</div>
              <div>School</div>
              <div>Countries</div>
              <div>Teachers</div>
              <div>Our Clients</div>
              <div>Testimonials</div>
            </div>
          </div>
            </div>
          </div>
         </div>
        </footer>
            </>
        )
    }
}
export default Footer