import React from 'react';

const Todo = () => {
    return (
        <div style={styles.container}>
            <input type="checkbox"/>
            <p>check me</p>
            <button>x</button>
        </div>
    );
};
const styles= {
    container: {
        display: 'flex',
        alignItems: 'center'
    }
}
export default Todo;