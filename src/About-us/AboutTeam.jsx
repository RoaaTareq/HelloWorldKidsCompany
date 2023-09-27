import React ,{ Component} from 'react';
// import './Home-CSS/Topsection.css'
import Globalimage from '../assets/images/Home/globe.png'
class About extends Component {
  

 
  render() {
    return (
     
  <>
    <section className="top-section">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center learn-section">
                    <div>
                        <h1 className="title">LEARN CODING</h1>
                        <p className="text-main">
                            We build coding talents that are equipped with 21st century skills. We provide a holistic approach to integrate coding curriculum into the educational system online and offline at home and at school.
                        </p>
                        <button className="btn-join">Join Our Community</button>
                    </div>
                    <div>
                        <img src={Globalimage} alt="Global" className="Global-img" />
                    </div>
                </div>
            </div>
        </section>
  </>
    );
  }
}
 export default About