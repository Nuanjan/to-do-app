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
        console.log(text, ' this is new text')
        setEditText(text)
    }
    const onClick =() => {
       setTodoArr([...todoArr,{
           id: nanoid(),
           text: editText,
           isComplete: false
       }])

       setEditText('');
    }

    return (

        <div style = {styles.container}>
            <input value={editText} onChange={event => onTextChange(event.target.value)} style={styles.input} type="text" placeholder="add to do list"/>
            <button onClick={onClick}style={styles.addButton}>+</button>
         </div>
    );
};
const styles:{
    container: CSS.Properties;
    addButton: CSS.Properties;
    input: CSS.Properties;

} = {
    container: {
        backgroundColor: '#af60fe',
        borderRadius: '10px',
        position:'absolute',
        bottom: '-30px',
        padding: '10px',
        width: '50%',
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