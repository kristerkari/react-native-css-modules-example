import React, { Component } from "react";
import { ScrollView } from "react-native";
import { ProfileCard } from "./ProfileCard";
import { Buttons } from "./Buttons";
import { Link } from "./Link";
import styles from "./App.css";

export default class App extends Component {
  render() {
    return (
      <ScrollView className={styles.wrapper} style={{}}>
        <Link
          description="Profile card from"
          url="https://themes.getbootstrap.com/products/application"
        />
        <ProfileCard />
        <Link
          description="Buttons from"
          url="https://codepen.io/coolzilj/pen/ImlEG"
        />
        <Buttons />
      </ScrollView>
    );
  }
}
