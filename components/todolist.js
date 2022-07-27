import { id } from 'date-fns/locale';
import utilStyles from '../styles/utils.module.css';
import TodoListItems from './todolist-items';

export default function TodoList({ todoListData }) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>To-Do List (API source tutorial)</h2>
            <ul className={utilStyles.list}>
                {todoListData.slice(0, 5).map(({ id, title, completed }) =>
                (
                    <TodoListItems id={id} title={title} completed={completed} />
                )
                )}

            </ul>
        </section>
    );
}