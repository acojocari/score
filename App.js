import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Dimensions
} from 'react-native';

export default function App() {

 // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={mainStyle.container}>
      <View style={headerStyle.container}>
        <View>
          <Text style ={headerStyle.text}>SCORE GAME</Text>
        </View>
        <View>
          <Text style ={headerStyle.text}>       Players: 3</Text>
        </View>

      </View>

      <View style={bodyStyle.container}>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    width:"100%",
    height:"10%",
    backgroundColor: '#8063FA',
    justifyContent: "center",
    alignItems: "center",
    top:10,
    flexDirection: "row"
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold"
  }
});

const bodyStyle = StyleSheet.create({
  container: {
    width:"100%",
    height:"50%",
    backgroundColor: '#fff'
  },
});

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:Platform.OS ==="android" ? 30 : 0,
  },
});
