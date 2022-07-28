import { id } from 'date-fns/locale';
import utilStyles from '../styles/utils.module.css';
import TodoListItem from './todolist-items';
import React from 'react';
import TodoListAdd from './todolist-add';

export default function TodoList({ todoListData, setToDoListData }) {

    function markComplete(id, checked) {
        setToDoListData(todoListData.map((item) => {
            if (item.id == id) {
                return {
                    ...item,
                    completed: checked
                }
            }
            return item;
        }));
    }

    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>To-Do List (API source tutorial)</h2>
            <TodoListAdd todoListData={todoListData} setToDoListData={setToDoListData} />
            <ul className={utilStyles.list}>
                {todoListData.map((listData) =>
                (
                    <TodoListItem key={`list-${listData.id}`} listData={listData} markComplete={markComplete} />
                )
                )}

            </ul>
        </section>
    );
}