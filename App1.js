import React, { PureComponent, Component } from 'react';
import {FlatList, View, Text} from 'react-native';
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
         listData:flatListData
     }
   }

  
 renderFlatListItem(item){
     return(
     <View style={{borderWidth:1}}>
         <Text>First Name: {item.item.firstName} </Text>
         <Text>First Name: {item.item.lastName} </Text>
         <Text>Class: {item.item.class} </Text>
     </View>
     )
 }

 deleteItem(){

    }

addItem(){
    var listData=this.state.listData;
    console.log(listData)
    listData.push({key:'7',firstName:'omar', lastName:'Bouanani', class:'SIG3'});
    this.setState({listData:listData})
}

  render (){
      const {listData}=this.state;
    return(
          <>
          <FlatList data={listData}
          renderItem={(item)=>this.renderFlatListItem(item)}
          keyExtractor={(item,index)=>  item.key.toString()}/>
           <CustomButton onClick={()=>this.deleteItem()} color='red'/>
          <CustomButton  onClick={()=>this.addItem()} color='blue'/>
          </>
    )
    }
  }
 


export default App1;

