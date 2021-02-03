import React from 'react';
import Todo from './Todo';

const DisplayTodoLists = () => {
    return (
        <div style={StyleSheet.container}>
           <Todo/>
           <Todo/>
           <Todo/>
        </div>
    );
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',

    }
}
export default DisplayTodoLists;