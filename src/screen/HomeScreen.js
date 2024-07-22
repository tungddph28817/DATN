import { View } from "react-native"
import HomeHeader from "../components/HomeHeader"
import SearchBar from "../components/SearchBar"
import CategorySelector from "../components/SelectList"
import PopularShoesList from "../components/ListShoe"

const HomeScreen = ()=>{
    return <View style={{
        flex:1,
        backgroundColor:'#f7f7f9'
    }}>
        <HomeHeader/>
        <SearchBar/>
        <CategorySelector/>
        <PopularShoesList/>
    </View>
}
export default HomeScreen