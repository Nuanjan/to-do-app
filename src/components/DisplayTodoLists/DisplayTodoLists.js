import React from 'react';
import Todo from './Todo';

const DisplayTodoLists = ({textArr}) => {
    
    return (
        <div style={styles.container}>
            {
            textArr.map((text, index) => (
                <Todo
                key={index}
                text={text}
                />
            ))
        }
        </div>
    );
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
width: '80%'
    }
}
export default DisplayTodoLists;