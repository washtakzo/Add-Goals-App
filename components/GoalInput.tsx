import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

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
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={enteredGoalText}
        onChangeText={changeInputHandler}
      />
      <Button title="Add Goal" onPress={pressHandler} />
      <Button title="Close Goal" onPress={onCloseModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
