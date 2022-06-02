import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert
} from 'react-native';
import { Platform } from "react-native-web";

export default function App() {
  const giveAlert = () => Alert.alert("Some alert hay!", "this is the message of the alert", [
    {text: "Yes", onPress: () => console.log("Yes!")},
    {text: "No", onPress: () => console.log("No!")},
  ]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.androidBezel}></View>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Button
          color="orange"
          title="Click Me"
          onPress={giveAlert}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  androidBezel: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 40,
    backgroundColor: "orange",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
