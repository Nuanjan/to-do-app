import React, {Dispatch, SetStateAction} from 'react';
import { BsTrash } from 'react-icons/bs';
import Css from 'csstype';
import {TodoType} from '../TodoList/TodoList';

interface Props {
    text: string;
    id: string;
    todoArr: TodoType[];
    setTodoArr: Dispatch<SetStateAction<TodoType[]>>;
}

const Todo: React.FC<Props> = ({text, id, todoArr, setTodoArr}) => {
    // const [newArray, setNewArray] = useState([])
    
    const onClickTrash =()=> {
     const newArray = todoArr.filter(text => text.id !== id)
      setTodoArr(newArray);
    }
    return (
        <div style={styles.container}>
            <input style={styles.checkbox} type="checkbox"/>
            <div style={styles.textWrap}>
            <p>{text}</p>
            </div>
            <BsTrash onClick={onClickTrash}/>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '24px',
        color: '#848484',      
    },
    checkbox: {
       
    },
    textWrap: {
        width: '100%',
        paddingLeft:"20px"
    }
}
export default Todo;