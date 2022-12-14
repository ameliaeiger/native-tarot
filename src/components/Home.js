import { useContext } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { AppContext } from './AppContext'


const Home = () => {
    const context = useContext(AppContext)
    return (
        <View style={styles.container}>
            <Text>{context.test}</Text>
        </View>
    )
}

export default  Home

const styles = StyleSheet.create({
    container: {
      flex: .2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:'2px',
      borderBottomColor: 'red'
    },
  })