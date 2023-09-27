import React,{Component, component} from "react";
import './Home-CSS/CodingTalents.css'
import team from '../assets/images/Home/team.png'

class CodingTalents extends Component{
    render(){
       return(
<>
<section className="talents">
            <div className="container">
                <h1 className="talents-title">Unleash Your Talent</h1>
                <p className="talent-certficate">
                    HelloWorld Certificate Program Perks Program is developed to reward and encourage these coding talents worldwide by offering them competitive opportunities. There are two levels of benefits provided by the Perks Program:
                </p>
                <div className="row team-mob">
                    <div className="col-6">
                        <img src={team} alt="team" className="team" />
                    </div>
                    <div className="col-6">
                        <h1 className="title-perks">HelloMaster Certificate Perks</h1>
                        <p className="text-perks">Learners who earn HelloMaster certificate are entitled to benefit from various opportunities including but are not limited to:</p>
                        <div className="perks">University & College Grants for talents who wish to pursue higher education in tech fields.</div>
                        <button type="submit" className="btn-certficate">Enroll now</button>
                    </div>

                    <div className="col-6">
                        <h1 className="title-perks">Certificate of Specialization Perks</h1>
                        <p  className="text-perks">Learners who successfully passed and earned the Certificate of Specialization will get the chance to receive professional training programs from our partners' network.</p>
                        <button type="submit" className="btn-certficate">Enroll now</button>
                    </div>
                </div>
            </div>
        </section>
</>
        )
    }
}
export default CodingTalents