import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Image } from "react-native";

type Props = {
  onAddGoal: (text: string) => void;
  onCloseModal: () => void;
};

const GoalInput = ({ onAddGoal, onCloseModal }: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  const pressHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    onCloseModal();
  };

  const changeInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Image
        source={require("../assets/images/goal.png")}
        style={styles.image}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoalText}
        onChangeText={changeInputHandler}
      />
      <View style={styles.actions}>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCloseModal} color="#89126b" />
        </View>
        <View style={styles.button}>
          <Button title="Add Goal" onPress={pressHandler} color="#122589" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e2a68",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#4d588a",
    borderColor: "#3b478f",
    borderRadius: 6,
    width: "100%",
    padding: 8,
  },
  actions: {
    flexDirection: "row",
    margin: 8,
  },
  button: {
    margin: 12,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
