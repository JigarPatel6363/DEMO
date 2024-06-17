

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

//  compoonet

import Calculator from './componet/Calculator'
import Counter from './componet/Counter'
import Changes from './componet/Changas '

// counter

import Content from './counter/Content';
 import Event from './counter/Event';
 import Footer from './counter/Footer';
 import Header from './counter/Header';
 import Sidebar from './counter/SideBar';

// event

 import OnchengEvent from './Event handling/OnchengEvent '
  import  Createarray from './Event handling/Create array'
  import Conditional from './Event handling/Conditional '
  import   Toggle from './Event handling/Toggle'

// Es5/6

  import AreaCalculator from './ES5& ES6 CONCEPT ARRAY/AreaCalculator'
  import CheckElementInArray from './ES5& ES6 CONCEPT ARRAY/CheckElementInArray'
  import DisplayArray from './ES5& ES6 CONCEPT ARRAY/DisplayArray'
  import SumArrayElements from './ES5& ES6 CONCEPT ARRAY/SumArrayElements'
  import NumberProcessor from './ES5& ES6 CONCEPT ARRAY/NumberProcessor'
  import EvenOddElements from './ES5& ES6 CONCEPT ARRAY/EvenOddElements'
  import LeapYearCheck from './ES5& ES6 CONCEPT ARRAY/LeapYearCheck'
  import ArrMerge from './ES5& ES6 CONCEPT ARRAY/ArrMerge';
  import  StudentInfo   from './ES5& ES6 CONCEPT ARRAY/StudentInfo'
  import ElementCounter  from './ES5& ES6 CONCEPT ARRAY/EvenOddElements'
  


function App() {
  const [click, setClick] = useState(false);

 const handleClick = () => {
   setClick(!click);
 }

  return (
    <>
    <div className="">
         <button onClick={handleClick} value={click}>EventProject</button>
     </div>
         {
           click ? <Event /> : (
    <>

      <Calculator/><hr />
      <Counter/><hr />
      <Changes/><hr />
      <Header /><hr />
     <Sidebar /><hr />
     <Content /><hr />
     <Footer /><hr />
    <OnchengEvent/> <hr />
     <Createarray/> <hr />
     <Conditional/> <hr />
     <Toggle/><hr /><hr />
     <AreaCalculator/><hr />
     <NumberProcessor/><hr />
     <DisplayArray/><hr />
     <CheckElementInArray/><hr />
     <SumArrayElements/><hr />
     < EvenOddElements/> <hr />
     <LeapYearCheck/> <hr />
     <ArrMerge/> <hr />
     < StudentInfo/> <hr />
     <ElementCounter/><hr />
    </>
 )
      }
</>
  )
}

export default App
// countar 
// import './App.css'
// 
// import { useState } from "react";
// import Content from './counter/Content';
// import Event from './counter/Event';
// import Footer from './counter/Footer';
// import Header from './counter/Header';
// import Sidebar from './counter/SideBar';
// function App() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   }

//   return (
//     <>
//       <div className="">
//         <button onClick={handleClick} value={click}>EventProject</button>
//       </div>
//       {
//         click ? <Event /> : (
//           <>
//             <Header />
//             <Sidebar />
//             <Content />
//             <Footer />
//           </>
//         )
//       }
//     </>
//   );
// }

// export default App;


// event hadindig
// import './App.css'



// import OnchengEvent from './Event handling/OnchengEvent '
// import  Createarray from './Event handling/Create array'
// import Conditional from './Event handling/Conditional '
// import   Toggle from './Event handling/Toggle'
// function App() {
  

//   return (
//     <>

 

//       <OnchengEvent/> <hr />
//       <Createarray/> <hr />
//       <Conditional/> <hr />
//       <Toggle/><hr /><hr />

//     </>
//   )
// }

// export default App

//  es6\5

// import './App.css'
// import AreaCalculator from './ES5& ES6 CONCEPT ARRAY/AreaCalculator'
// import NumberProcessor from './ES5& ES6 CONCEPT ARRAY/NumberProcessor'
// import DisplayArray from './ES5& ES6 CONCEPT ARRAY/DisplayArray'
// import CheckElementInArray from './ES5& ES6 CONCEPT ARRAY/CheckElementInArray'
// import SumArrayElements from './ES5& ES6 CONCEPT ARRAY/SumArrayElements'
// import EvenOddElements from './ES5& ES6 CONCEPT ARRAY/EvenOddElements'
// import LeapYearCheck from './ES5& ES6 CONCEPT ARRAY/LeapYearCheck'
// import ArrMerge from './ES5& ES6 CONCEPT ARRAY/ArrMerge';
// import    StudentInfo   from './ES5& ES6 CONCEPT ARRAY/StudentInfo'
// import ElementCounter  from './ES5& ES6 CONCEPT ARRAY/EvenOddElements'



// function App() {
  

//   return (
//     <>

   
//       <AreaCalculator/>
//       <NumberProcessor/>
//       <DisplayArray/>
//       <CheckElementInArray/>
//       <SumArrayElements/>
//       < EvenOddElements/>
//       <LeapYearCheck/>
//       <ArrMerge/>
//       < StudentInfo/>
//       <ElementCounter/>

//     </>
//   )
// }

// export default App



