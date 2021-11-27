import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  Dimensions
} from 'react-native';
import Header from "./components/Header";
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";

export default function App() {

 // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={mainStyle.container}>
      <Header />
      <Player name={'Player 1'} />
      <Player name={'Player 2'} />
      <Player name={'Player 2'} />
      <AddPlayerForm />
    </SafeAreaView>
  );
}

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop:Platform.OS ==="android" ? 30 : 0,
  },
});
