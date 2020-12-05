import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text, TextInput, TouchableOpacity} from 'react-native';
import CustomButton from './CustomButton';
import ColorSurface from './ColorSurface';

const flatListData=[{key:'1',firstName:'ahmed', lastName:'Bouanani', class:'SIG3'},
{key:'2',firstName:'ahmed', lastName:'Bouanani', class:'SIG3'},
{key:'3',firstName:'ahmed', lastName:'Bouanani', class:'SIG3'},
{key:'4',firstName:'ahmed', lastName:'Bouanani', class:'SIG3'},
{key:'5',firstName:'ahmed', lastName:'Bouanani', class:'SIG3'}]


 class App1 extends PureComponent {
   constructor(){
     super();
     this.state={
         listData:flatListData,
         firstName:'',
         lastName:'',
         classe:''
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1}}>
         <Text>First Name: {item.item.firstName} </Text>
         <Text>First Name: {item.item.lastName} </Text>
         <Text>Class: {item.item.classe} </Text>
         <TouchableOpacity onPress={()=>this.deleteItem(item.item.key)}><Text>Delete</Text></TouchableOpacity>
     </View>
     )
 }

 deleteItem(key){
  var listData=this.state.listData.slice();
  newListdata=listData.filter(item => item.key !== key);
  this.setState({listData:newListdata})
    }

addItem(){
    const {firstName, lastName, classe} = this.state;
    var listData=this.state.listData.slice();
    console.log({key:listData.length+1,firstName:firstName, lastName:lastName, classe:classe})
    listData.push({key:listData.length+1,firstName:firstName, lastName:lastName, classe:classe});
    this.setState({listData:listData})
}

onFirstNameChange=(value)=>{
this.setState({firstName:value})
}

onLastNameChange=(value)=>{
  this.setState({lastName:value})
  }

  onClassChange=(value)=>{
    this.setState({classe:value})
    }

  

  render (){
      const {listData}=this.state;
    return(
          <React.Fragment>
            <TextInput placeholder="First name" value={this.state.firstName}
            onChangeText={(value)=>this.onFirstNameChange(value)}></TextInput>
             <TextInput placeholder="Last name" value={this.state.lastName}
            onChangeText={(value)=>this.onLastNameChange(value)}></TextInput>
            <TextInput placeholder="Class" value={this.state.classe}
            onChangeText={(value)=>this.onClassChange(value)}></TextInput>
            <TouchableOpacity onPress={()=>this.addItem()}><Text>Insert</Text></TouchableOpacity>
            
          <FlatList data={this.state.listData}
          extraData={this.state}
          renderItem={(item)=>this.renderFlatListItem(item)}
          keyExtractor={(item,index)=>  item.key.toString()}/>
          </React.Fragment>
    )
    }
  }
 


export default App1;

