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
import LolView from "./src/components/LolView.js"

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

  const CardDetailsScreen = ({ navigation, route }) => {
    console.log(route.params)
    return <CardDetails navigation={navigation} />
  }

  const LolViewScreen = ({ navigation }) => {
    return <LolView navigation={navigation} />
  }

  return (
    <AppContext.Provider value={context}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Amelia's Tarot" component={HomeScreen} />
          <Stack.Screen name="Browse Cards" component={CardScreen} />
          <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
          <Stack.Screen name="LOL" component={LolViewScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}

export default App