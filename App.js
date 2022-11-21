import { StatusBar } from 'expo-status-bar';
import { startTransition } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.SquareShapeView}/>
          <View style={styles.SquareShapeView}/>
          <View style={styles.SquareShapeView}/>  
          <View style={styles.SquareShapeView}/>
        </View> 
        <View style={[styles.wrapper,{width:280}]}>
          <View style={[styles.wrapper,{width:280,marginLeft:0}]}>
            <View style={styles.RectangleShapeView}/> 
            <View style={[styles.SquareShapeView,{}]}></View>
          </View>
          <View style={[styles.wrapper,{flexDirection:'column',width:98,height:380,margin:0}]}>
            <View style={[styles.RectangleShapeView,{width:75,height:166}]}></View>
            <View style={[styles.SquareShapeView,]}/>
            <View style={[styles.SquareShapeView,]}/>
          </View>
        </View>
        <View style={[styles.wrapper,{flexDirection:'column',width:92,height:380}]}>
            <View style={[styles.SquareShapeView,{}]}/>
            <View style={[styles.RectangleShapeView,{width:75,height:166,}]}/>
            <View style={[styles.SquareShapeView,{}]}/>
             <View style={[styles.RectangleShapeView,{margin:5,width:170,height:265,bottom:366,left:95}]}/>
        </View> 
        <View style={[styles.wrapper,{flexDirection:'column',bottom:90,left:90}]}>
        <View style={[styles.RectangleShapeView,{marginLeft:7,marginTop:0,width:265,height:75,}]}/>
        </View>      
      </View> 
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
     display:'flex',
    justifyContent: 'center',
    marginTop:0,
    marginLeft:10,
    // paddingRight:10,
    // flexDirection:'row',
    border:3,
    // borderColor:'black'
  },

  wrapper:{
    flexDirection:'row',
    height:90,
    width:380,
    margin:0,
    justifyContent:'flex-start'
    
  },
  RectangleShapeView:{
    width: 166,
    height: 75,
    margin:9,
    border:5,
    borderColor:'#990033',
    borderWidth:1,
    borderRadius:15,
    backgroundColor:'#ffe6f2'
  },

  SquareShapeView: {

    width: 75,
    height: 75,
    margin:9,
    border:5,
    borderColor:'#990033',
    borderWidth:1,
    borderRadius:15,
    backgroundColor:'#ffe6f2'
  },
});
