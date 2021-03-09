import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Select extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:"rgb(60,179,113)"}}>
        <Image style={{ width: 200, height: 200, marginTop: 30, marginLeft:100, borderRadius:170 }} source={require('../Image/mrfox1.png')} />
        <TouchableOpacity
          style={{ backgroundColor: "white", height: 150, width: 150, borderRadius: 15, marginTop: 60, marginLeft: 35 }}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 0 });
          }}>
          <Image style={{width:80, height:80, marginLeft:35, marginTop:15}} source={{uri: 'https://comps.canstockphoto.com/a-z-book-icon-blue-square-button-stock-photos_csp50705631.jpg'}}></Image>
          <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold", marginTop: 10 }}>GRAMMAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: 150, width: 150, borderRadius: 15, marginTop: -147, marginLeft: 215 }}

          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 1 });
          }}>
          <Image style={{width:100, height:100, marginLeft:25}} source={{uri: 'https://cdn4.vectorstock.com/i/thumb-large/33/43/icon-school-book-with-bookmark-in-flat-style-vector-25483343.jpg'}}></Image>
          <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold", marginTop: 0 }}>VOCABULARY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: 150, width: 150, borderRadius: 15, marginTop: 20, marginLeft: 35 }}
          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 4 });
          }}>
          <Image style={{width:80, height:80, marginLeft:35, marginTop:15}} source={{uri: 'https://icon-library.com/images/off-icon/off-icon-1.jpg'}}></Image>
          <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold", marginTop: 10 }}>LOG OUT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "white", height: 150, width: 150, borderRadius: 15, marginTop: -147, marginLeft: 215 }}

          onPress={() => {
            global.L.props.navigation.replace('SideMenu', { command: 2 });
          }}>
          <Image style={{width:90, height:90, marginLeft:25, marginTop:10}} source={require('../Image/mrfox.png')}></Image>
          <Text style={{ fontSize: 20, color: "black", textAlign: "center", fontWeight: "bold", marginTop: 0 }}>ABOUT US</Text>
        </TouchableOpacity>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  titleFrame: {
    width: '100%',
    height: '10%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: '20%',
    width:"100%"
   
  },
  icons: {
    marginLeft: -5,
  },
  question: {
    marginLeft: '2%',
    fontSize: 20,
    flex: 4,
    marginTop: 20,
    marginBottom: -100,
    fontWeight: 'bold',
  },
  answerFrame: {
    marginTop: 180,
    marginLeft: 10,
  },
  answer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 55,
    fontSize: 70,
    borderColor: 'red',
    borderWidth: 1,
    flexDirection: 'row',
  },
  content: {
    fontSize: 20,
    marginLeft: '1%',
    color: 'black',
  },
  selectContent: {
    fontSize: 18,
    marginLeft: '5%',
    color: 'green',
  },
  footer: {
    marginTop: 100,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  image: {
    width: 50,
    height: 50,
  },
  next_button: {
    marginRight: 70,
  },
  back_button: {
    marginLeft: 80,
  },
  submit_button: {
    width: 110,
    elevation: 8,
    backgroundColor: 'rgb(60,179,113)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 30,
    marginRight: 30,
  },
});
