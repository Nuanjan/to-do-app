import React from 'react';
import { BsTrash } from 'react-icons/bs';


const Todo = ({text}) => {
    return (
        <div style={styles.container}>
            <input style={styles.checkbox} type="checkbox"/>
            <div style={styles.textWrap}>
            <p>{text}</p>
            </div>
            <BsTrash/>
        </div>
    );
};
const styles= {
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