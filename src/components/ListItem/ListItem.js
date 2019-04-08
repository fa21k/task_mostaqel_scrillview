import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,Image} from "react-native";
const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Image source={{uri:props.Image}} style={styles.img}/>
      <Text style={styles.txtfont}>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee"
  },
  img:{
    width:50,
    height:50
    
  },
  txtfont:{
    fontSize:20,
    fontFamily:'string'
  }
});

export default listItem;
