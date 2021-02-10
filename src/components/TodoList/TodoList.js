import React, {useState, useEffect} from 'react';
import AddTodo from '../AddTodo';
import DisplayTodoLists from '../DisplayTodoLists';
const styles = {
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
const TodoList = () => {
    // onClick from todoList
    // update data from the child component(input)
    // get new data from input and still save old data
    // copy old data and add new data
    const [textArr,setTextArr] = useState([])
    const [data, setData] = useState([])
    useEffect(() => {
        
    },[textArr])
    const onClickHandler = () => {

    }
    return (
        <div style={styles.container}>
            
            <DisplayTodoLists textArr={textArr} />
            <AddTodo textArr={textArr} setTextArr={setTextArr}/>
            
        </div>
    );
};

export default TodoList;