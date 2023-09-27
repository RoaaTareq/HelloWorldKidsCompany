import React ,{Component} from 'react'
import  './Home-CSS/UnleashTalent.css'
class UnleashTalent extends Component {
  

 
    render() {
      return (
       
    <>
    <section className="talent-section">
            <div className="container">
                <h1 className="talent-title">Where Coding Talents Are Born & Nurtured</h1>
                <p className="talent-text">
                    At HelloWorldKids, we develop a generation of coders who can solve real-world problems while exploring, being creative, and innovative. We have a mission of simplifying text-based coding for young learners, giving them a
                    chance to discover their talents and guide them through a unique certification journey, unleashing thousands of perks and opportunities. We aim to build the largest community of young coding learners.
                </p>
                <a href="" className="Readmore">Read More About Hello World Kids</a>
            </div>
            <div className="d-flex justify-content-center mt-5 btn-mob">
                <div className="btn-hellocode">Learn Coding</div>
                <div className="btn-hellocode">Get Certfied</div>
                <div className="btn-hellocode">Unlease Your Talent</div>
            </div>
        </section>
    </>
      );
    }
  }
  export default UnleashTalent