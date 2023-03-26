import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import { ListRenderItemInfo } from "react-native/types";

type Props = {
  //   goalItem: ListRenderItemInfo<string>;
  goalItem: any;
};

const GoalItem = ({ goalItem }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalItem.item}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#3561e4",
    marginBottom: 24,
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    width: 264,
  },
  goalText: {
    fontSize: 18,
    color: "#f8ffb9",
    textAlign: "center",
  },
});
