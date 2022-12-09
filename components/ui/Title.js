import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Titile({children}) {
   return <Text style={styles.title}>{children}</Text>;
}

export default Titile;

const styles = StyleSheet.create({
    
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:2,
        borderColor:'white',
        padding:12,

    }
})
