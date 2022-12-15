import { useEffect, useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

// Components
import { AppContext } from "./src/components/AppContext.js"
import Home from "./src/components/Home.js"
import Card from "./src/components/TarotCard.js"
import CardDetails from "./src/components/CardDetails.js"

// Data files
import tarotData from "./src/data/tarot-deck.js"

// React Navigation
const Stack = createNativeStackNavigator()

const App = () => {
  const deck = tarotData.cards
  const [cardNames, setCardNames] = useState("")
  const [id, setId] = useState("")
  const [selected, setSelected] = useState("")

  const randomNum = (max) => {
    return Math.floor(Math.random() * max)
  }

  const context = {
    randomNum: randomNum,

    deck: deck,
    cardNames: cardNames,

    id: id,
    setId: setId,

    selected: selected,
    setSelected: setSelected,
  }

  // useEffect(() => {
  //   setContext()
  // }, [])

  // const setContext = () => {
    // let names = deck.map((item) => {
    //   return item.name
    // })
    // setCardNames(names)
  // }

  const HomeScreen = ({ navigation }) => {
    return <Home navigation={navigation} />
  }

  const CardScreen = ({ navigation }) => {
    return <Card navigation={navigation} />
  }

  const CardDetailsScreen = ({ navigation }) => {
    return <CardDetails navigation={navigation} />
  }

  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App