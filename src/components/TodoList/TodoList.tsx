import React, {useState, useEffect} from 'react';
import AddTodo from '../AddTodo';
import DisplayTodoLists from '../DisplayTodoLists';
import CSS from 'csstype';

const styles:{
    container: CSS.Properties;
} = {
    container: {
        backgroundColor: "#d0f0c0",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "flex-start",
        minWidth: '300px',
        minHeight: '400px',
        position: 'relative',
        alignItems: 'center',
        padding: '20px',
        border: 'solid #ff9de6 2px',
        borderRadius: '20px'

    }
}

export type TodoType = {
    id: string;
    text: string;
    isComplete: boolean;
};

const TodoList = () => {
    // onClick from todoList
    // update data from the child component(input)
    // get new data from input and still save old data
    // copy old data and add new data
    const [todoArr, setTodoArr] = useState<TodoType[]>([]);
    
    return (
        <div style={styles.container}>
            
            <DisplayTodoLists todoArr={todoArr} setTodoArr={setTodoArr} />
            <AddTodo todoArr={todoArr} setTodoArr={setTodoArr} />
            
        </div>
    );
};

export default TodoList;