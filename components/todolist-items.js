import utilStyles from '../styles/utils.module.css';

export default function TodoListItem({ listData, markComplete }) {
    return (<li><input type="checkbox" checked={listData.completed} onChange={(a) => {
        a.preventDefault();
        markComplete(listData.id, a.target.checked);
    }} />{listData.title}</li>);
}