import { useContext } from "react"

// Libraries
import { StyleSheet, Text, View, Image } from "react-native"

// Components
import { AppContext } from "./AppContext"
import ImageData from "./ImageData"

const CardDetails = ({ navigation }) => {
  const context = useContext(AppContext)

  return (
    <View style={styles.container}>
      <Image source={ImageData[context.selected.name_short]} />
      <Text>{context.id}</Text>
      <Text>Technically, the component is loaded....</Text>
    </View>
  )
}

export default CardDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})