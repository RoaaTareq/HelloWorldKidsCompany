import React ,{Component} from 'react';
import './Home-CSS/NumberOfMarkting.css'
class NumberOfMarkting extends Component {
  

 
    render() {
      return (
       
    <>
        <section className="numbers-of-Markting">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                        <span className="number">+400,000</span>
                        <span className="indeciters-num">students</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <span className="number">+350,000</span>
                        <span className="indeciters-num">Projects</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <span className="number">+4.5 MILLION</span>
                        <span className="indeciters-num">Lines of Code</span>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <span className="number">+240</span>
                        <span className="indeciters-num">Schools</span>
                    </div>
                </div>
            </div>
        </section>
    </>
      );
    }
  }
   export default NumberOfMarkting