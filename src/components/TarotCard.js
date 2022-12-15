import { useContext } from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import { Button, Card, Title, Paragraph } from "react-native-paper"

// Components
import { AppContext } from "./AppContext"
import ImageData from "./ImageData"

// Dimensions
const window = Dimensions.get("window")

const TarotCard = ({ navigation }) => {
  const context = useContext(AppContext)
  const initCard = context.deck[context.randomNum(2)]

  const getRandom = (e) => {
    e && e.preventDefault()

    let result = context.deck[context.randomNum(2)]

    context.setSelected(result)
    context.setId(result.name_short)
  }

  const navToDetails = (e) => {
    e.preventDefault()
    navigation.navigate("CardDetails", { name: ["first", "second"] })
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardHeader}>
          <Title style={styles.titleFont}>
            {context.selected ? context.selected.name : initCard.name}
          </Title>
          <Paragraph style={styles.subtitleFont}>
            {context.selected ? context.selected.meaning_up : initCard.meaning_up}
          </Paragraph>
        </Card.Content>
        <Card.Cover
          source={context.selected ? ImageData[context.selected.name_short] : ImageData[initCard.name_short]}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Card.Actions style={styles.buttonContainer}>
          <Button onPress={(e) => navToDetails(e)}>View Details</Button>
          <Button onPress={(e) => getRandom(e)}>New</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

export default TarotCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: window.height * 0.76,
    width: window.width * 0.9,
    backgroundColor: "black",
    alignItems: "center",
  },
  cardHeader: {
    height: "25%",
    width: "95%",
  },
  cardImage: {
    backgroundColor: "rgba(255,255,255,0)",
    // height:window.height*.5,
    height: "60%",
  },
  titleFont: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitleFont: {
    color: "white",
    fontSize: 15,
  },
  buttonContainer: {
    height: "20%",
    width: "100%",
  },
})