import React, { PureComponent, Component } from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity, Text, BackHandler} from 'react-native';
import CustomButton from './CustomButton';
import ColorSurface from './ColorSurface';
import { Actions } from 'react-native-router-flux';

const flatListData=[{firstName:'ahmed', lastName:"Bouanani", class:"SIG3"}]


 class App extends PureComponent {
   constructor(){
     super();
     this.state={
       color:{color:'red'}
     }
   }

  changeColor = (color) =>{
    var color={color:color}
    this.setState({color:color})
  }

  goBack(){
    Actions.reset('app1');
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._handleBackPress)
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._handleBackPress);
}

_handleBackPress(){
  return true
}

  render (){
    const {color} = this.state;
    const {message} = this.props;
    return(
          <>
          <CustomButton onClick={this.changeColor} color='red'/>
          <CustomButton  onClick={this.changeColor} color='blue'/>
          <ColorSurface color={color.color}/>
          <Text>{message}</Text>
          <TouchableOpacity onPress={()=>this.goBack()}><Text>Goback</Text></TouchableOpacity>
          </>
    )
    }
  }
 


export default App;

