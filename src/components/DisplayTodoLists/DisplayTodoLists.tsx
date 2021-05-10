import React, {Dispatch, SetStateAction} from 'react';
import Todo from './Todo';
import Css from 'csstype';
import {TodoType} from '../TodoList/TodoList';

interface Props{
    todoArr:TodoType[];
    setTodoArr: Dispatch<SetStateAction<TodoType[]>>;
}

const DisplayTodoLists:React.FC<Props> = ({todoArr, setTodoArr}) => {
    return (
        <div style = {styles.container}>
            {
            todoArr.map((todo, index) => (
                <Todo
                key={index}
                text={todo.text}
                id={todo.id}
                todoArr={todoArr}
                setTodoArr={setTodoArr}
                />
            ))
        }
        </div>
    );
};
const styles: {
    container: Css.Properties
} = {
    container: {
        display: 'flex',
        flexDirection: 'column',
width: '80%'
    }
}
export default DisplayTodoLists;