import { Text, View , Touchable, Pressable, StyleSheet} from "react-native";

function PrimaryButton({children}) {
    function pressHandler(){
        console.log("presssed")
    }
    return (        <View style={styles.buttonOuterContainer}>

        <Pressable onPress={pressHandler} style={styles.buttonInnerContainer} android_ripple={{color:'#640233'}}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        </View>

    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden',

    },
    buttonInnerContainer:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    }
})