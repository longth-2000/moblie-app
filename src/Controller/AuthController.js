import firebase from '@react-native-firebase/app';
function AuthController() {
  global.getAuthUser = async () => {
    console.log('get auth user');
    let database = firebase
      .database()
      .ref('user/' + global.userID + '/achievements');
    await database.on('value', (datasnap) => {
      if (datasnap.val() != null) {
        global.grammarAchievements = datasnap.val();
        console.log(' thành tích ', global.grammarAchievements);
        
      } else {
        //global.L.props.navigation.replace('Select');
      }
    });
  };
}
export default AuthController();
