import React, {Dispatch, SetStateAction, useState} from 'react';
import { BsTrash } from 'react-icons/bs';
import {TodoType} from '../TodoList/TodoList';
import {FiEdit} from 'react-icons/fi';

interface Props {
    text: string;
    id: string;
    todoArr: TodoType[];
    isComplete: boolean;
    setTodoArr: Dispatch<SetStateAction<TodoType[]>>;
}

const Todo: React.FC<Props> = ({text, id,isComplete, todoArr, setTodoArr}) => {
    const [isOnEdit, setIsOnEdit] = useState(false);
    const [editText, setEditText] = useState(text);
    const [isCrossTextClass, setIsCrossTextClass] = useState(false);
    const onClickTrash =()=> {
     const newArray = todoArr.filter(text => text.id !== id)
      setTodoArr(newArray);
    }
    const onClickEdit = () => {
        setIsOnEdit(true);
    }

    const onSubmitText = (e: any) => {
        console.log(e.code)
        if(e.code === 'Enter'){
            setIsOnEdit(false);
        }
    }

    const onEditTextChange = (changeText: string)=> {
        setEditText(changeText);
    }

    const onCheckIsComplete = (e: any) => {
        if(e.target.checked)
            setIsCrossTextClass(true);
            else
            setIsCrossTextClass(false);

    }
    return (
        <div style={styles.container}>
            <input style={styles.checkbox} type="checkbox" onClick={(e) => onCheckIsComplete(e)}/>
            <div style={styles.textWrap}>
                {isOnEdit?
                <input
                type="text"
                style={styles.inputForEdit}
                value={editText}
                onChange={event => onEditTextChange(event.target.value)}
                onKeyDown={(e) => onSubmitText(e)}
                />:<p style={{textDecoration:isCrossTextClass?"line-through":"none"}}>{editText}</p>}
            </div>
            <FiEdit style={styles.iconStyle} onClick={onClickEdit}/>
            <BsTrash style={styles.iconStyle} onClick={onClickTrash}/>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
       borderBottom: 'solid #a5d8f3 2px',
        fontSize: '24px',
        color: '#043927',      
    },
    checkbox: {
       
    },
    textWrap: {
        width: '100%',
        paddingLeft:"20px",
    },
    inputForEdit: {
        width: '90%',
        border: "2px solid green",
        backgroundColor:"#feff9e",
        borderRadius: "4px",
        boxShadow: "10px 0px 20px white"
    },
    iconStyle: {
        cursor:'pointer',
        marginLeft:"15px"
    }

}
export default Todo;