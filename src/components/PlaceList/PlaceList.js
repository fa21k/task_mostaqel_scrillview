import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const placesOutput = props.places.map((place, i) =>(

    <ScrollView>
    <ListItem
      key={i}
      placeName={place}
      Image="https://cdni.rt.com/media/pics/2018.07/article/5b3f08b7d4375075028b45f1.jpg"
      onItemPressed={() => props.onItemDeleted(i)}
    />
    </ScrollView>
  
  ));
   return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
