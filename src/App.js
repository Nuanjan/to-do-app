import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div style={styles.container}>To do list</div>
      <TodoList/>
    </div>
  );
}
const styles = {
  container: {
    backgroundColor: '#be93d4',
    color: '#ffffff',
    fontWeight: '600',
    width: '45%',
    padding:'20px',
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '10px'

  }
}

export default App;
