import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  //using this function to pass the value of enteredGoalText to the main file as its required there
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); //clear the string after the function executes
  }
  return (
    <Modal visible={props.visible} animationType="slide ">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/goal image.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Write your goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:"#120438",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    width: "25%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
});
