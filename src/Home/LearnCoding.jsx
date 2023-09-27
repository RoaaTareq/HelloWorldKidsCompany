import React ,{Component} from "react";
import './Home-CSS/LearnCoding.css'
import Code from '../assets/images/Home/code.png'
import Studing from '../assets/images/Home/studying.png'

class LearnCoding extends Component{
    render(){
        return(
        <>
          <section className="coding-section">
            <div className="container">
                <h1 className="coding-title">Learn Coding</h1>
                <p className="coding-text">
                    We build coding talents that are equipped with 21st century skills. We provide a holistic approach to integrate coding curriculum into the educational system online and offline at home and at school.
                </p>
                <div className="row mt-5 align-items-center Smoothy-card">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="smoothy-tilte">SmoothY</h1>
                        <p className="smoothy-text">Innovated by HelloWorldKids, SmoothY is the first simplified text-based coding language worldwide. It is developed specifically for young learners' educational development.</p>
                        <button className="learnmore-btn">Learn More</button>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img src={Code} alt="program" className="program" />
                    </div>
                </div>

                <div className="row mt-5 align-items-center hellocodestudent">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img src={Studing} alt="studying" className="studying-img" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="smoothy-tilte">HelloCode</h1>
                        <p className="smoothy-text">
                            HelloCode is an online interactive educational platform, where young learners from 6-16 years old can learn coding skills -at school or at home- starting from the fundamentals, and reaching advanced programming
                            levels, through a fun and unique learning experience.
                        </p>
                        <button className="learnmore-btn">Learn More</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1 className="smoothy-tilte">Custom Curriculum Development</h1>
                        <p className="smoothy-text">
                            HelloWorldKids knows that every country and culture is different and appreciates that. It also considers the efficiency of kids’ comprehension when they can relate to their own culture while learning.
                        </p>
                        <button className="learnmore-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        </>
        )
    }
}
export default LearnCoding