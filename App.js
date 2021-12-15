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
import GlobalContext from "./components/context/Provider";

export default function App() {

 // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={mainStyle.container}>
      <StatusBar style="auto" />
      <GlobalContext>
          <Header />
          <PlayerList />
          <AddPlayerForm />
      </GlobalContext>
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
