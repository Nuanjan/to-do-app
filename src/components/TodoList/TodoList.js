import React from 'react';
import AddTodo from '../AddTodo';
import DisplayTodoLists from '../DisplayTodoLists';
const styles = {
    container: {
        backgroundColor: "green",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center"

    }
}
const TodoList = () => {
    return (
        <div style={styles.container}>
            <AddTodo/>
            <DisplayTodoLists/>
            
        </div>
    );
};

export default TodoList;