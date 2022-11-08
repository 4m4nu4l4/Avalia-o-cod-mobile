import { Text, View } from "react-native";
import { styles } from "../lib/styles";
import img from 'react-image'
import Navbar from './Navbar'

export const Home = ({ navigation }) => (

    <View style={styles.container}>
        <Text>Bem vindos ao nosso site</Text>
        
    </View>
)

const img = () => {

    return (
  
      <div>
    
        <div className='header-container flex row center-center full-view' >
            <img src="./assets/logo.png"/>
           
            </Navbar>
      </div>
      </div>
    )
  }
  
  export default img;