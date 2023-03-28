import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
// import { ListRenderItemInfo } from "react-native/types";

type Props = {
  //   goalItem: ListRenderItemInfo<string>;
  goalItem: any;
  onDeleteGoal: (goal: string) => void;
};

const GoalItem = ({ goalItem, onDeleteGoal }: Props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "#ccc" }}
        onPress={() => onDeleteGoal(goalItem.item)}
        style={({ pressed }) =>
          pressed && (styles.pressedItem as StyleProp<ViewStyle>)
        }
      >
        <Text style={styles.goalText}>{goalItem.item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#3561e4",
    margin: 6,
    borderWidth: 1,
    borderRadius: 6,
    width: 264,
  },
  goalText: {
    padding: 8,
    fontSize: 18,
    color: "#f8ffb9",
    textAlign: "center",
  },
  pressedItem: {
    backgroundColor: "#4d588a",
  },
});
