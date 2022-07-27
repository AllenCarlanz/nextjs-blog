import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function About() {
    return (
        <section className={utilStyles.headingMd}>
            <p className={utilStyles.justify}>
                Hello I'm Allen! I'm a Web Developer and Shopify Expert. I'm currently trying to learn both React and Next.js, actually this website that you're viewing is my demo site. In case you're interested to work with me, feel free to download my resume by clicking

                <Link href="https://drive.google.com/file/d/1cFpVGKKSbvLm3SuSeR5gvryuOuAqTJsz/view?usp=sharing">
                    <a> here</a>
                </Link>
                . Looking forward to working with you real soon!
            </p>
        </section>
    );
}