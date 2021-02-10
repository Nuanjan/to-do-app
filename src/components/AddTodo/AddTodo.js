import React,{ useState } from 'react';

const AddTodo = ({textArr, setTextArr}) => {
    // user type on textfiled
    // user click add button
    // store data somewhere
    // we store (dataText, id, isChecked)
    // display new todo  below
    const [editText, setEditText] = useState("")
    const onTextChange=(text) => {
        setEditText(text)
    }
    const onClick =() => {
        setEditText("")
    setTextArr([...textArr,editText])
    
    }

    return (

        <div style={styles.container}>
            <input onChange={event => onTextChange(event.target.value)} style={styles.input} type="text" placeholder="add to do list"/>
            <button onClick={() => onClick()}style={styles.addButton}>+</button>
         </div>
    );
};
const styles = {
    container: {
        backgroundColor: '#af60fe',
        borderRadius: '10px',
        position:' absolute',
        bottom: ' -30px',
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