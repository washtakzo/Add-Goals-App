import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalList, setGoalList] = useState<string[]>([]);

  const pressHandler = (enteredGoal: string) => {
    const existingGoalIndex = goalList.indexOf(enteredGoal);
    const isGoalAlreadyExist = existingGoalIndex !== -1 ? true : false;

    if (isGoalAlreadyExist) {
      setGoalList((prevGoalList: string[]) => {
        let newGoalList = [...prevGoalList];
        newGoalList = newGoalList.filter((goal) => goal !== enteredGoal);
        return newGoalList;
      });
    } else {
      setGoalList((currentGoals: string[]) => [...currentGoals, enteredGoal]);
    }
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={(goal: string) => pressHandler(goal)} />
      <View style={styles.goalsListContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(goal, index) => goal}
          renderItem={(goalItem) => <GoalItem goalItem={goalItem} />}
        />
        {/* {goalList.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  goalsListContainer: {
    flex: 5,
  },
});
