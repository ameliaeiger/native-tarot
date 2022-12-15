import { useContext, useEffect } from "react"

// Libraries
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native"
import { Card, Divider, Avatar } from "react-native-paper"


// Components
import { AppContext } from "./AppContext"
import ImageData from "./ImageData"

const CardDetails = ({ navigation }) => {
  const context = useContext(AppContext)

  useEffect(() => {
    navigation.setOptions({ headerTitle:context.selected.name })
  },[])
  console.log(context.selected)
  return (
    <View style={styles.container}>
      <Image source={ImageData[context.selected.name_short]} style={styles.image} />
      <Text style={styles.titleFont} >{context.selected.name}</Text>
      <Divider style={styles.divider} />

      <View style={styles.mainDetails} >
        <Text style={styles.subtitleFont} >Arcana: {context.selected.type}</Text>
        <Text style={styles.subtitleFont} >Element: {context.selected.element}</Text>
        <Text style={styles.subtitleFont} >Number: {context.selected.numerology}</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.description} >
        <Card>
          
          <Card.Title 
            title="Upright Meaning: "
            subtitle="go to meaning -->"
            style={styles.cardTitle}

            left={(props) => <Avatar.Icon {...props} icon="star" />}
          />
        </Card>
        <Card>
          <Card.Title 
            title="Reverse Meaning: "
            subtitle="go to meaning -->"
            style={styles.cardTitle}

            left={(props) => <Avatar.Icon {...props} icon="star" />}
          />
        </Card>
        <Card>
          <Card.Title 
            title="Reverse Meaning: "
            subtitle="go to meaning -->"
            style={styles.cardTitle}

            left={(props) => <Avatar.Icon {...props} icon="star" />}
          />
        </Card>
      </View>

      {/* <Button title="Please. I came all this way for nothing....?"
        onPress={e => navigation.navigate("LOL")} /> */}
    </View>
  )
}

export default CardDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
    alignItems: "center",
  },
  divider: {
    borderBottomColor: "gray",
    borderWidth: .5,
    width: "100%",
  },
  mainDetails: {
    flex: 1,
    maxHeight:50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderColor: "pink",
    // borderWidth: 1,
    width: "95%",
  },
  cardTitle: {
    backgroundColor: "rgb(255, 255, 255, 0)",
  },
  description: {
    flex: 1,
    justifyContent: "space-between",
    width: "99%",
    maxHeight: "35%",
    paddingTop: 20,

    // borderColor: "pink",
    // borderWidth: 1,
  },
  image: {
    height:200,
    width: '50%',
    resizeMode: "contain",
  },
  titleFont: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    padding: 10,
  },
  subtitleFont: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
})