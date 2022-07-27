import utilStyles from '../styles/utils.module.css';
import Date from './date';
import Link from 'next/link';

export default function BlogListItems({ id, date, title }) {
    return (
        <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
                <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
        </li>
    );
}