import React, { PureComponent, Component } from 'react';
import {Router, Stack, Scene, ActionConst} from 'react-native-router-flux';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './googlemaps';
import App6 from './osm';


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
        <Scene key="app4" component={App4} title="App4"  />
        <Scene key="app5" component={App5} title="App5"  />
        <Scene key="app6" component={App6} title="App5"  initial/>
      </Stack>
    </Router>
    )
    }
  }
 


export default App;

