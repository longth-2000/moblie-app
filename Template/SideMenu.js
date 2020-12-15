import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import GrammarController from '../Screens/Controller/GrammarController';
import VocabularyController from '../Screens/Controller/VocabularyController';
import Practice from '../Screens/Practice';
import Login from '../Screens/Login';
import About from '../Screens/About';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

function fox() {
  return (
    <View>
      <Image style={{width:80, height:80, borderRadius:80, marginLeft:90, marginTop:50}}  source={{ uri: global.userPicture }} />
      <View style={{width:160, marginLeft:50}}>
        <Text
          style={{
            marginTop: 10,
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            textAlign:"center"
            
          }}>
          {global.userName}
        </Text>
        {/* <Text
          style={{ marginTop: 10, marginLeft: 80, color: 'white', fontSize: 15 }}>
          Know Fox, Know Success
        </Text> */}
      </View>
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: 'white', color: 'red' }}
      {...props}>
      <DrawerItem
        label={() => fox()}
        style={{
          height: 200,
          width: 500,
          marginTop: -50,
          marginLeft: 0,
          backgroundColor: 'rgb(60,179,113)',
        }}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <View style={{backgroundColor: 'rgb(60,179,113)', marginTop:-10, height:800}}>
        <View style={{height:80, paddingLeft:20,borderBottomWidth:2, borderColor:"white"}}>
          <TouchableOpacity
            onPress={() => {
              global.L.props.navigation.replace('SideMenu', { command: 0 });
            }}>
            <View style={{display:"flex", flexDirection:"row", marginTop:25}}>
              <Icon name="bookmark" size={30} color={"white"}></Icon>
              <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginLeft:17, marginTop:0}}>Grammar</Text>
              <Icon name="chevron-right" size={15} color={"white"} style={{marginLeft:105, marginTop:5, opacity:0.6}}></Icon>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:80, paddingLeft:20,borderBottomWidth:2, borderColor:"white"}}>
          <TouchableOpacity
            onPress={() => {
              global.L.props.navigation.replace('SideMenu', { command: 1 });
            }}>
            <View style={{display:"flex", flexDirection:"row", marginTop:25}}>
              <Icon name="book" size={30} color={"white"}></Icon>
              <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginLeft:12, marginTop:0}}>Vocabulary</Text>
              <Icon name="chevron-right" size={15} color={"white"} style={{marginLeft:85, marginTop:5, opacity:0.6}}></Icon>

            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:80, paddingLeft:20,borderBottomWidth:2, borderColor:"white", backgroundColor:"rgb(60,179,113)"}}>
          <TouchableOpacity
            onPress={() => {
              global.L.props.navigation.replace('SideMenu', { command: 2 });
            }}>
            <View style={{display:"flex", flexDirection:"row", marginTop:25}}>
              <Icon name="user" size={30} color={"white"}></Icon>
              <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginLeft:17, marginTop:0}}>About us</Text>
              <Icon name="chevron-right" size={15} color={"white"} style={{marginLeft:105, marginTop:5, opacity:0.6}}></Icon>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:80, paddingLeft:20,borderBottomWidth:2, borderColor:"white"}}>
          <TouchableOpacity
            onPress={() => {
              global.L.props.navigation.replace('SideMenu', { command: 3 });
            }}>
            <View style={{display:"flex", flexDirection:"row", marginTop:25}}>
              <Icon name="user-circle" size={30} color={"white"}></Icon>
              <Text style={{color:"white", fontSize:20, fontWeight:"bold", marginLeft:15, marginTop:0}}>Log out</Text>
              <Icon name="chevron-right" size={15} color={"white"} style={{marginLeft:110, marginTop:5, opacity:0.6}}></Icon>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export class Fox extends Component {
  render() {
    return (
      <View style={{ width: 100, height: 20, backgroundColor: 'violet' }}>
        <Image
          style={{ width: 80, height: 80, marginTop: 60, marginLeft: 0 }}
          source={require('../src/mrfox.png')}
        />
      </View>
    );
  }
}
export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    global.S = this;
  }
  render() {
    if (this.props.route.params.command === 0) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
        </Drawer.Navigator>
      );
    } else if (this.props.route.params.command === 1) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
        </Drawer.Navigator>
      );
    } else if (this.props.route.params.command === 2) {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="About us" component={About} />
          <Drawer.Screen name="Log out" component={Login} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
        </Drawer.Navigator>
      );
    }
    else {
      return (
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Log out" component={Login} />
          <Drawer.Screen name="Grammar" component={GrammarController} />
          <Drawer.Screen name="Vocabulary" component={VocabularyController} />
          <Drawer.Screen name="About us" component={About} />
        </Drawer.Navigator>)
    }
  }
}
const styles = StyleSheet.create({});
