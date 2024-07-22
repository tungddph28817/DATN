import { useEffect } from "react"
import { View,Image } from "react-native"

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('OnBoarding')
        }, 3000)
    }, [])
    return <View style={{
        flex: 1,
        backgroundColor: "#0D6EFD",
        justifyContent: "center",
        alignItems:'center'
    }}>
        <Image source={require('../../assets/Logo.png')} />
    </View>
}
export default Splash