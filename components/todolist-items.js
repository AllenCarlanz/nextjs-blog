import utilStyles from '../styles/utils.module.css';

export default function TodoListItems({ id, title, completed }) {
    if (completed) {
        return (<li key={id} className={utilStyles.todoDone}>{title}</li>);
    }
    else {
        return (<li key={id} >{title}</li>);
    }
}