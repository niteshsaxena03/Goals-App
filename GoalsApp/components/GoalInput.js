import { StyleSheet, View, TextInput, Button, Modal } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  //using this function to pass the value of enteretdGoalText to the main file as its required there
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); //clear the string after the function executes
  }
  return (
    <Modal visible={props.visible} animationType="slide ">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 5,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
