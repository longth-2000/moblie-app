import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let data1 = Object.values(require('./Grammar/G1.json'));
let data2 = Object.values(require('./Grammar/G2.json'));
let data3 = Object.values(require('./Grammar/G3.json'));
let data4 = Object.values(require('./Grammar/G4.json'));
let data5 = Object.values(require('./Grammar/G5.json'));
let data6 = Object.values(require('./Grammar/G6.json'));
let data7 = Object.values(require('./Grammar/G7.json'));
let data8 = Object.values(require('./Grammar/G8.json'));
let data9 = Object.values(require('./Grammar/G9.json'));
let data10 = Object.values(require('./Grammar/G10.json'));
const dataJson = {
  G1: data1,
  G2: data2,
  G3: data3,
  G4: data4,
  G5: data5,
  G6: data6,
  G7: data7,
  G8: data8,
  G9: data9,
  G10: data10,
}
function GrammarEntity({ navigation, route }) {
  let key = route.params.key;
  let da = dataJson[key];
  return (
    <View style={styles.style}>
      <View style={styles.titleFrame}>
      <TouchableOpacity
                onPress={() =>
                  global.L.props.navigation.replace('SideMenu', { command: 0 })
                }>
                <Icon
                  name="chevron-left"
                  color="white"
                  size={20}
                  style={{marginLeft: 20}}
                />
              </TouchableOpacity>
        <Text style={styles.titleText}>{da[0].content}</Text>
      </View>
      <ScrollView>
        <View style={{marginTop:20}}>
          <Text style={{ color: "#FF3333", fontWeight: "bold", fontSize: 22 }}>{da[1].content}</Text>
          <View style={{ width: "95%", marginTop: "2%" }}>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 20, textAlign: "justify" }}>{da[2].content}</Text>
          </View>
          <Text style={{ color: "black", fontWeight: "bold", fontSize: 22, marginTop: 10 }}>{da[3].content}</Text>
          <Text style={{ color: "black", fontSize: 18, marginTop: 10 }}>{da[4].content}</Text>
          <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
            <Icon name="arrow-right" color="black" size={20} style={{ marginLeft: 15 }} />
            <Text style={{ color: "black", fontSize: 18 }}>{da[5].content}</Text>
          </View>
          <Text style={{ color: "#FF3333", fontWeight: "bold", fontSize: 22, marginTop: 10 }}>{da[6].content}</Text>
          <View style={{ width: "95%", marginTop: "2%" }}>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify" }}>{da[7].content}</Text>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify", marginTop: 10 }}>{da[8].content}</Text>
          </View>
          <Text style={{ color: "#FF3333", fontWeight: "bold", fontSize: 22, marginTop: 10 }}>{da[9].content}</Text>
          <View style={{ width: "95%", marginTop: "2%" }}>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify" }}>{da[10].content}</Text>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify", marginTop: 10, fontWeight: "bold" }}>{da[11].content}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
   
              <Text style={{ fontSize: 18, color: "black", marginLeft: 0, textAlign: "justify", fontStyle: "italic" }}>{da[12].content}</Text>
            </View>
            <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify", marginTop: 10, fontWeight: "bold" }}>{da[13].content}</Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
    
              <Text style={{ fontSize: 18, color: "black", marginLeft: 15, textAlign: "justify", fontStyle: "italic" }}>{da[14].content}</Text>
            </View>

          </View>

        </View>

        <TouchableOpacity
          style={styles.submit_button}
          onPress={() => {
            navigation.replace('Practice', {
              title: route.params.title,
              key: route.params.key,
            });
          }}>
          <Text style={styles.footerText}>Luyện Tập</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
  },
  footerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    
  },
  titleFrame: {
    width: '100%',
    height: '8%',
    backgroundColor: 'rgb(60,179,113)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 25,
   
    marginLeft: 20,
  },
  submit_button: {
    elevation: 8,
    backgroundColor: 'rgb(0,191,255)',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft:60,
    marginTop:20,
    marginBottom:50,
    width:"70%"
  },
});
export default GrammarEntity;
