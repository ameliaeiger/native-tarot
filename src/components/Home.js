import { useContext } from "react"

// Libraries
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"

// Components
import { AppContext } from "./AppContext"

const Home = ({ navigation }) => {
  const context = useContext(AppContext)

  return (
    <View style={styles.container}>
      <Text>{context.test}</Text>
      <Button
        title="clickeroo!"
        onPress={() => navigation.navigate("Card")}
        mode="outline"
        buttonColor="pink"
      >
        Gimme a random thingy
      </Button>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})