import React ,{ Component, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Layout/header' ;
import Topsection from './Home/TopHomeSection'
import MarktingOfNumber from './Home/NumberOfMarkting'
import UnleashTalent from './Home/UnleashTalent'
import LearnCoding from './Home/LearnCoding';
import Certified from './Home/Certified';
import CodingTalents from './Home/CodingTalents';
// import OurPartners from './Home/OurPartners'
// import Footer from './Layout/footer'
class App extends Component {
  

 
  render() {
    return (
     <>
     <Header></Header>
     <Topsection></Topsection>
     {/* <MarktingOfNumber></MarktingOfNumber> */}
     <UnleashTalent></UnleashTalent>
     <LearnCoding></LearnCoding>
     <Certified></Certified>
     <CodingTalents></CodingTalents>
     {/* <OurPartners></OurPartners>
     <Footer></Footer> */}
     

     </>
    );
  }
}


export default App
