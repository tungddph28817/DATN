import { View,Text } from "react-native"
import AppHeader from "../components/Header"
import PopularShoesList from "../components/ListShoe"
import AppHeader2 from "../components/AppHeader2"

const FavoriteScreen = () => {
  return <View style={{
    flex:1,
    paddingTop: 50,
  }}>
    <AppHeader2 title="Yêu thích"/>
    <PopularShoesList isFav={true}/>
  </View>
}
export default FavoriteScreen