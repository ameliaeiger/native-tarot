import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

// Components
import { AppContext } from './src/components/AppContext.js'
import Home from './src/components/Home.js'

// Data files
import deck from "./src/data/tarot-deck.js"

// React Navigation
const Stack = createNativeStackNavigator()

const App = () => {
  const context = {
    test: "hello"
  }

  const HomeScreen = ({navigation}) => {
    return(
      <Home navigation={navigation} />
    )
  }
  
  
  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} 
          // options={logoutOption} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})