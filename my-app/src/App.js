import React from 'react';
 import Login from './Components/Login';
 import Page from './Containers/Page';
 import {Switch, Route} from "react-router";
//import Chart from './Containers/RadialGaugeComponent';
import Payment from './Containers/Payment';
function App(){
    return (
    
      <div>
     <Switch>
     <Route path="/dashboard" component={Page} />
     <Route path="/payment" component={Payment} />
          <Route path="/" component={Login} />
          
        </Switch>
      </div>
    
    )
}
export default App;
