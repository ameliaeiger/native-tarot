import { useContext } from "react"

// Libraries
import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper"

// Components
import { AppContext } from "./AppContext"

const LolView = ({ navigation }) => {
  const context = useContext(AppContext)


  return (
    <View style={styles.container}>
      <Text>{context.selected.desc}</Text>
      <Button
        title="clickeroo!"
        onPress={() => navigation.navigate("Amelia's Tarot")}
        mode="outline"
        buttonColor="pink"
      >
        Ugh. This is lame.
      </Button>
    </View>
  )
}

export default LolView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})