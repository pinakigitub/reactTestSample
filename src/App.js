import React from 'react';
import Home from './components/Home'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDbOperationGoingOn:false
    }
  }
  render() {
    return ( 
          <div>
            <span>
            Pinaki
            </span>
             <div>
               <Home></Home>
             </div>
            </div>

    )}
};

export default App;