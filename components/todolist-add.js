import React from "react";

function addTodo(listItem, todoListData, setToDoListData) {
    if (listItem == "" || listItem == null) {
        alert("Please enter an input");
    }
    else {
        setToDoListData([
            ...todoListData,
            {
                userId: 1,
                id: 1231231,
                title: listItem,
                completed: false
            }]);
        alert(listItem + " is added");
    }
}

export default function TodoListAdd({ todoListData, setToDoListData }) {
    const [listItem, setListItem] = React.useState();

    return (
        <form onSubmit={(a) => {
            a.preventDefault();
            addTodo(listItem, todoListData, setToDoListData);
        }}>
            <label htmlFor="first">Add item:</label>
            <input type="text" id="first" name="first" value={listItem} onChange={(val) => setListItem(val.target.value)} />
            <button type="submit">Add item</button>
        </form >
    );
}