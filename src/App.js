import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div style={styles.container}>To do list</div>
      <TodoList />
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: "#e75480",
    color: "#fafafa",
    fontWeight: "600",
    minWidth: "300px",
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    borderRadius: "20px",
  },
};

export default App;
