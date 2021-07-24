import React,{ useState, Dispatch, SetStateAction } from 'react';
import { nanoid } from 'nanoid';
import CSS from 'csstype';
import {TodoType} from '../TodoList/TodoList';

interface Props{
    todoArr:TodoType[];
    setTodoArr: Dispatch<SetStateAction<TodoType[]>>;
}

const AddTodo:React.FC<Props> = ({todoArr, setTodoArr}) => {
    // user type on textfiled
    // user click add button
    // store data somewhere
    // we store (dataText, id, isChecked)
    // display new todo  below
    const [editText, setEditText] = useState<string>("")

    const onTextChange = (text:string) => {
        setEditText(text)
    }
    const onSubmitTodoTextClick =() => {
       setTodoArr([...todoArr,{
           id: nanoid(),
           text: editText,
           isComplete: false
       }])

       setEditText('');
    }

    const onSubmitText = (e: any) => {
        if(e.code === 'Enter'){
            e.preventDefault();
            e.stopPropagation();
            onSubmitTodoTextClick()
        }
    }
    return (

        <div style = {styles.container}>
            <input value={editText} 
            onChange={event => onTextChange(event.target.value)} 
            onKeyDown={(e) => onSubmitText(e)}
            style={styles.input} 
            type="text" 
            placeholder="add list"/>
            <button onClick={onSubmitTodoTextClick}style={styles.addButton}>+</button>
         </div>
    );
};
const styles:{
    container: CSS.Properties;
    addButton: CSS.Properties;
    input: CSS.Properties;

} = {
    container: {
        backgroundColor: '#e75480',
        borderRadius: '10px',
        position:'absolute',
        bottom: '-30px',
        padding: '10px',
        textAlign: 'center',
        display:'flex'
       

    },
    addButton: {
        backgroundColor: 'transparent',
        border: 'none',
        width:'20px',
        color: '#f8f2fe',
       fontSize:'24px',
        marginLeft: '5px'
    },
    input: {
        height: '30px',
        border: 'none',
        fontSize:'16px',
    }
}
export default AddTodo;