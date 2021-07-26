import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <h1 style={styles.container}>TO DO LIST</h1>
      <TodoList />
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: "#e75480",
    color: "#fafafa",
    fontWeight: "800",
    minWidth: "300px",
    padding: "20px",
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "10px",
    borderRadius: "20px",
  },
};

export default App;
