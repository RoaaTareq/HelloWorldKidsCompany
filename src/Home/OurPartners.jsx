import React ,{Component} from 'react'
import './Home-CSS/OurPartners.css'
import prometric from '../assets/images/Home/prometric resized.png'
import otf from '../assets/images/Home/otf.gif'
import Naseej from '../assets/images/Home/Naseej.png'
import Progresssoft from '../assets/images/Home/Progresssoft.png'
import student from '../assets/images/Home/student.jpg'

class OurPartners extends Component{

    render(){
        return (
            <>
             <section className="parnters_hellocode">
            <div className="container">
<h1 className="title-partners">Our Partners</h1>
<div className="row d-flex justify-content-between align-items-center">
  <div className="col-3">
    <img src={prometric} alt="partners" className="parnters" />
  </div>
  <div className="col-3">
    <img src={otf} alt="partners" className="parnters" />
  </div>
  <div className="col-3">
    <img src={Naseej} alt="partners" className="parnters" />
  </div>
  <div className="col-3">
    <img src={Progresssoft} alt="partners" className="parnters" />
  </div>
</div>
<h1 className="Awards-title">Awards & Recognition</h1>
<p className="Award-text">As a leader in the field of technology education, hello world kids has accomplished many milestones throughout its journey.</p>

<h1 className="About-us">What Our Students Say About Us</h1>
<img src={student} alt="student" className="student"/>

            </div>
            </section>
            
            </>
        )
    }
}
export default OurPartners