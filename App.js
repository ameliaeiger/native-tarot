import { StyleSheet, Text, View } from 'react-native'

// Components
import { AppContext } from './src/components/AppContext.js'

// Data files
import deck from "./src/data/tarot-deck.js"

const App = () => {
  const context = {

  }
  
  return (
    <AppContext.Provider value={context}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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