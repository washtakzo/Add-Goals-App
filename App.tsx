import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Button,
  Modal,
  StatusBar,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pressHandler = (enteredGoal: string) => {
    const isGoalAlreadyExist = goalList.includes(enteredGoal);
    if (isGoalAlreadyExist) return;

    setGoalList((currentGoals: string[]) => [...currentGoals, enteredGoal]);
  };

  const deleteGoal = (goalToDelete: string) => {
    setGoalList((currentGoals) =>
      currentGoals.filter((goal) => goal !== goalToDelete)
    );
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.appContainer}>
        <Button title="add goal" onPress={() => setIsModalVisible(true)} />
        <Modal visible={isModalVisible} animationType="slide">
          <GoalInput
            onAddGoal={(goal: string) => pressHandler(goal)}
            onCloseModal={() => setIsModalVisible(false)}
          />
        </Modal>
        <View style={styles.goalsListContainer}>
          <FlatList
            data={goalList}
            keyExtractor={(goal, _) => goal}
            renderItem={(goalItem) => (
              <GoalItem goalItem={goalItem} onDeleteGoal={deleteGoal} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "#1e085a",
  },
  goalsListContainer: {
    flex: 5,
  },
});
