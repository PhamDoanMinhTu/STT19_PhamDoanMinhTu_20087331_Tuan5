import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

function B() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image
                    style={styles.imageView1}
                    source={require("../assets/usb.png")}/>
                <Text style={styles.textView1}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <View style={styles.view2}>
                <Text style={styles.textView2}>Cực kỳ hài lòng</Text>
                <View style={styles.view2_1}>
                    <Image style={styles.imageView2} source={require("../assets/Star.png")}/>
                    <Image style={styles.imageView2} source={require("../assets/Star.png")}/>
                    <Image style={styles.imageView2} source={require("../assets/Star.png")} />
                    <Image style={styles.imageView2} source={require("../assets/Star.png")}/>
                    <Image style={styles.imageView2} source={require("../assets/Star.png")}/>
                </View>
            </View>
            <View style={styles.view3}>
                <Image style={styles.imageView3} source={require("../assets/camera.png")}/>
                <Text style={styles.textView3}>Thêm hình ảnh</Text>
            </View>
            <View style={styles.view4}>
                <TextInput style={styles.textInputView4} placeholderTextColor='gray'placeholder='Hãy chia sẻ những điều bạn thích về sản phẩm'></TextInput>
                <Text style={styles.textView4}>https://meet.google.com/nsj-ojwi-xpp</Text>
            </View>
            <View style={styles.view5}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}> Gửi </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: "rgba(255, 255, 255, 1)"

    },
    view1: {
        flex: 3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    imageView1: {
        width: '70px',
        height: '70px',
        top: '13px',
        left: '16px',
        padding: '10.34px, 7.66px, 10.66px, 7.84px',

    },
    textView1: {
        width: '259px',
        height: '21px',
        top: '19px',
        left: '30px',
        fontWeight: 'bold',
        fontSize: '14px'

    },
    view2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textView2: {
        fontWeight: 'bold',
        fontSize: '17px',
        marginBottom: 20,
        lineHeight: '21.09px',
        
    },
    imageView2: {
        width: '39px',
        height: '39px',
        marginLeft: 10
    },
    view2_1: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    view3: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'rgba(21, 17, 235, 1)',
        width: 300,
        marginLeft: 45,
        borderRadius: 5,
        borderStyle: 'solid',
        height: '68px'
    },
    imageView3: {
        width: 39,
        height: 32,
       

    },
    textView3:{
        textAlign: "center",
        lineHeight: 32,
        fontSize: 18,
        fontWeight: "700",
    },
    view4: {
        flex: 6,
   
        alignItems: 'center'
    },
    textInputView4:{
        width: 300,
        height: 200,
        borderRadius: 5,
        marginVertical: 12,
        borderStyle: "solid",
        justifyContent: "flex-start",
        borderColor: "#1511eb",
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
    },
    textView4:{
        position: 'absolute',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: '50px',
        marginTop: '190px',
        marginRight: "52px",
        fontSize: '10px',
        fontWeight: 'bold'

    },
    view5: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '40px'
    },
    button:{
        backgroundColor: "rgba(21, 17, 235, 1)",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
          height: 50,
          margin: 12,
          paddingVertical: 20,
          width: 300,
          
      },
      button_text: {
        color: "white",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "normal",
        fontWeight: 'bold',
      },
});
export default B;