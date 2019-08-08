import React from "react";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import DeletePage from "./pages/DeletePage";
import Test from "./components/TestDelete";
import Intro from "./components/IntroUser";

import axios from 'axios';

console.log("inside app js");
function App() {
    return (
        <Router>
            <div>
                <Test />
                <Intro />
                <Switch>
                    <Route exact path="/" component={DeletePage} />
                    <Route exact path="/intro" component={Intro} />
                </Switch>
            </div>
            
        </Router>
    );
}

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Test} />
//           {/* <Route exact path="/" component={Books} /> */}
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data:''
//     }
//   }

//   componentDidMount() {
//     axios.get('/data').then(data => this.setState({data}))
//   }
//   render() {
//     console.log(this.state.data)
//     return (
//       <div className="App">
//         <div className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <h1>React - Google Books Search</h1>
//         </div> 
//         <p>our data : </p>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
