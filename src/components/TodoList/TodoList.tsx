import React, {useState} from 'react';
import AddTodo from '../AddTodo';
import DisplayTodoLists from '../DisplayTodoLists';
import CSS from 'csstype';
import { nanoid } from 'nanoid';

const styles:{
    container: CSS.Properties;
} = {
    container: {
        backgroundColor: "#fafafa",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "flex-start",
        minWidth: '300px',
        minHeight: '400px',
        width:'40%',
        position: 'relative',
        alignItems: 'center',
        padding: '20px',
        border: 'solid #9ab10a 10px',
        boxShadow: '0 0 10px white',
        borderRadius: '20px'

    }
}

export type TodoType = {
    id: string;
    text: string;
    isComplete: boolean;
};
const initialToDoList = [
    {
        id: nanoid(),
        text: "To do List 1",
        isComplete: false
    },
    {
        id: nanoid(),
        text: "To do List 2",
        isComplete: false
    },
    {
        id: nanoid(),
        text: "To do List 3",
        isComplete: false
    },

]
const TodoList = () => {
    // onClick from todoList
    // update data from the child component(input)
    // get new data from input and still save old data
    // copy old data and add new data
    const [todoArr, setTodoArr] = useState<TodoType[]>(initialToDoList);
    
    return (
        <div style={styles.container}>
            
            <DisplayTodoLists todoArr={todoArr} setTodoArr={setTodoArr} />
            <AddTodo todoArr={todoArr} setTodoArr={setTodoArr} />
            
        </div>
    );
};

export default TodoList;