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
import Header from "./components/Header";
import AddPlayerForm from "./components/AddPlayerForm";
import PlayerList from "./components/PlayerList";

export default function App() {

 // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={mainStyle.container}>
      <StatusBar style="auto" />
        
      <Header />
        <PlayerList />
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
