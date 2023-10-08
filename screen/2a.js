import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, } from 'react-native';


function A() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.Text1}>LOGIN</Text>
      </View>

      <View style={styles.view2_3}>
        <View style={styles.view2}>
          <Image source={require("../assets/user.png")} style={[styles.Image, { width: 32, height: 32 }]} />
          <TextInput placeholder="Name" style={styles.TxtBx}></TextInput> 
          
        </View>
        <View style={styles.view3}>
          <Image source={require("../assets/lock.png")} style={[styles.Image2, { width: 32, height: 32 ,}]}></Image>
          <TextInput placeholder="Password" style={styles.TxtBx}></TextInput>
          <Image source={require("../assets/eye.png")} style={[styles.Image2, { width: 32, height: 32 ,}]}></Image>
          
        </View>
      </View>
      
      <View style={styles.view4}>
        <button style={styles.btlogin}>LOGIN</button>

      </View>
      <View style={styles.view5}>
        <Text style={styles.Text2}>Forgot your password?</Text>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FBCB00',
    backgroundImage:  'linear-gradient(#FBCB00 0%, #BF9A00 100%)',
    justifyContent: 'center',
    
  },
  view1: {
    flex:2 ,
    justifyContent: 'center',
  },
  view2_3: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',


  },
  view2: {
    width: '350px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '1px',
    marginLeft: '10px',
    marginRight: '10px',
    justifyContent: 'flex-start',
    alignItems: 'center'
    
    
  },
  view3: {

    width: '350px',
    height: '50px',
    flexDirection: 'row',
    borderWidth: '1px',
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  view4: {
    flex:2  ,
    justifyContent: 'center',
    alignItems:'center'
    
  },
  view5: {
    flex:2  ,
    justifyContent: 'center',
    alignItems:'center'
    
  },
  Text1:{
    color: 'Black',
    fontSize:35,
    fontWeight: 700,
  },
  Text2:{
    color: 'Black',
    fontSize:25,
    fontWeight: 700,
    marginBottom: '200px',
    
  },
  TxtBx:{
    height: '100%',
    width: '90%',
    marginLeft: '5px',
    fontSize: '18px',
    lineHeight: '21.09px',
    fontFamily: 'Roboto'

  },
  btlogin:{
    display: 'flex',
    flexDirection:'row',
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 60,
    borderRadius:'5px',

    // textbt
    color: 'White',
    fontSize:'20PX',
    fontWeight: 'bold',
  
  },
 
  
});
export default A;