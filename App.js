import React, { PureComponent, Component } from 'react';
import {Router, Stack, Scene, ActionConst} from 'react-native-router-flux';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';


if (__DEV__) {
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

 class App extends PureComponent {
  

  render (){
    return(
      <Router>
      <Stack key="root">
        <Scene key="app3" component={App3}  />
        <Scene key="app1" component={App1} title="App1"  type={ActionConst.RESET} initial/>
        <Scene key="app2" component={App2} title="App2"  />
        
      </Stack>
    </Router>
    )
    }
  }
 


export default App;

