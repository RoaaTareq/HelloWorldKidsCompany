import React ,{Component} from 'react'
import HelloCode from '../assets/images/Home/HelloCode.png'
import developer from '../assets/images/Home/developer.png'
import './Home-CSS/Certified.css'

class Certified  extends Component{
    render(){
        return (
            <>
                   <section className="certificate">
            <div className="container">
                <h1 className="certificate-title">Get Certified</h1>
                <p className="certificate-text">
                    Yes, now, through HelloWorldKids and for the first time, young learners can become certified coders. HelloWorldKids Certification Program (HCP) is the first internationally recognized examination and certification
                    program of its kind worldwide.
                </p>
                <div className="row certificate-mob">
                    <div className="col-6">
                        <img src={developer} alt="developer" className="developer-img" />
                    </div>
                    <div className="col-6">
                        <h1 className="title-exam">Exam Skills</h1>
                        <p className="text-exam">The exam assesses the kids’ abilities in the most 21-century demanded skills:</p>
                        <div className="box-logic">
                            <h2 className="skill-title">Logical Thinking</h2>
                            <p>The act of analyzing a situation and coming up with a sensible solution. By using reasoning skills to objectively study the problem and reach a rational conclusion.</p>
                        </div>
                        <button type="submit" className="btn-certficate">Enroll now</button>
                    </div>
                </div>
                <div className="row certificate-mob">
                    <div className="col-6">
                        <h1 className="certficate-title">Certifications</h1>
                        <p className="cert-text">Certifications are categorized into three specializations:</p>
                        <div className="web-course">HelloWeb Certification</div>
                        <button type="submit" className="btn-certficate">Enroll now</button>
                    </div>
                    <div className="col-6">
                        <img src={HelloCode} alt="Hellocode-certficate" className="certficate" />
                    </div>
                </div>
            </div>
        </section>
            </>
        )
           
        
    }
}
export default Certified