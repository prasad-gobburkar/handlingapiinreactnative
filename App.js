import React,{useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, Button} from 'react-native'
import axios from 'axios'

const App = () => {
  const [details, setDetails] = useState(null)

  const fetchDetails = async () => {
    try {
      const {data} = await axios.get('https://randomuser.me/api/')
      const details = data.results[0]
      setDetails(details)
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    fetchDetails()
  },[])

  if(!details){
    return(
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }else{

  return(
  <View style={styles.container}>
    <Image style={styles.image} source={{
          uri: details.picture.medium,
        }} />
    <View style={styles.response}>
      <Text style={styles.text} >{details.name.first}</Text>
      <Text style={styles.text}>{details.email}</Text>
      <Text style={styles.text}>{details.phone}</Text>
      
    </View>
    <Button title="Click Me To Change Data"  onPress={fetchDetails}/>
  </View>
  )
  }
}
 
export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#242B2E",
    color:"white"
  },
  image:{
    marginTop:120,
    width:150,
    height:150,
    borderWidth:1,
    borderColor:"black",
    borderRadius:75
  },
  response:{
    margin:60,
    marginBottom:20,
    alignItems:'center',
    width:"90%",
    borderWidth:1,
    borderColor:"white",
    color:"white"

  },
  text:{
    fontSize:20,
    color:"white"

  }
})