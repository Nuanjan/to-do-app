import React, {useState, useEffect} from 'react';
import AddTodo from '../AddTodo';
import DisplayTodoLists from '../DisplayTodoLists';
import CSS from 'csstype';

const styles:{
    container: CSS.Properties;
} = {
    container: {
        backgroundColor: "#fffff2",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "flex-start",
        width: '45%',
        height: '40%',
        position: 'relative',
        alignItems: 'center',
        padding: '20px',
        border: 'solid #be93d4 2px'

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
    //const [textArr,setTextArr] = useState([]);
    const [todoArr, setTodoArr] = useState<TodoType[]>([]);
    return (
        <div style={styles.container}>
            
            <DisplayTodoLists todoArr={todoArr} setTodoArr={setTodoArr} />
            <AddTodo todoArr={todoArr} setTodoArr={setTodoArr} />
            
        </div>
    );
};

export default TodoList;