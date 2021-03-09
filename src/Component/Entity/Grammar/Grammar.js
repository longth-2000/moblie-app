import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ProgressBar} from '@react-native-community/progress-bar-android';

global.grammarState = 0;
global.maxGrammar = [15, 15, 15, 15, 15, 15, 15, 15,15,5,15];
export default class Grammar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              content: 'Cấu trúc chung của 1 câu',
              ID: 1,
              key: 'G1',
            },
            {
              content: 'Câu bị động',
              ID: 2,
              key: 'G2',
            },
            {
              content: 'Câu cầu khiến',
              ID: 3,
              key: 'G3',
            },
            {
              content: 'Giới từ',
              ID: 4,
              key: 'G4',
            },
            {
              content: 'So sánh',
              ID: 5,
              key: 'G5',
            },
            {
              content: 'Các thì hiện tại',
              ID: 6,
              key: 'G6',
            },
            {
              content: 'Các thì quá khứ',
              ID: 7,
              key: 'G7',
            },
            {
              content: 'Các thì tương lai',
              ID: 8,
              key: 'G8',
            },
            {
              content: 'Câu điều kiện',
              ID: 9,
              key: 'G9',
            },
          ]}
          numColumns={1}
          renderItem={({item}) => (
            <View style={styles.style}>
              <TouchableOpacity
                style={styles.category}
                onPress={() => {
                  global.grammarState = item.ID - 1;
                  this.props.navigation.replace('GrammarEntity', {
                    title: item.content,
                    key: item.key,
                    ID: item.ID,
                  });
                }}>
                <View style={styles.circle}>
                  <Text style={styles.textCircle}>{item.ID}</Text>
                </View>
                <View style={styles.stand_circle}>
                  <Text style={styles.content}>{item.content}</Text>
                  <View style={styles.progess}>
                    <Text style={styles.content_percent}>
                      {Math.round((global.grammarAchievements[item.ID - 1] /
                        global.maxGrammar[item.ID - 1]) *
                        100)}
                      %
                    </Text>
                    <ProgressBar
                      style={{width: 300, marginTop:-55, marginLeft:0}}
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={global.grammarAchievements[item.ID - 1] / 15}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  category: {
    marginBottom: '3%',
    marginTop: '3%',
  },
  content: {
    width: '100%',
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 0,
    fontWeight: 'bold',
  },
  progess: {
    width: 350,
   
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  grammarTitle: {
    height: 70,
    backgroundColor: 'rgb(60,179,113)	',
    flexDirection: 'row',
  },
  textTitle: {
    color: 'white',
    fontSize: 25,
    marginLeft: 25,
    marginTop: 17,
    fontWeight: 'bold',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(0,206,209)',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginLeft: 10,
    marginTop: 10,
  },
  stand_circle: {
    marginTop: -60,
    marginLeft: 60,
  },
  textCircle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  },
  content_percent: {
     marginTop:15,
    marginLeft: 5,
    paddingBottom:15
    },
});
