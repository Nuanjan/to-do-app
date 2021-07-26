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
            placeholder="Create New To Do Here"/>
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
        width: '70%',
        height:'50px',
        padding: '10px',
        textAlign: 'center',
        display:'flex',
       

    },
    addButton: {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#f8f2fe',
       fontSize:'48px',
        margin: '0 auto'
    },
    input: {
        height: '50px',
        width: '80%',
        border: 'none',
        fontSize:'24px',
        color: 'rgb(4, 57, 39)'
    }
}
export default AddTodo;