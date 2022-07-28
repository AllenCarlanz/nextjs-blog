import utilStyles from '../styles/utils.module.css';
import BlogListItems from './bloglist-items';
import Link from 'next/link';

export default function BlogList({ allPostsData }) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <BlogListItems key={id} id={id} date={date} title={title} />
                ))}
            </ul>
        </section>
    );
}