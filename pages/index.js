import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/bloglist';
import Link from 'next/link';
import TodoList from '../components/todolist';
import About from '../components/about';
import React from 'react';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  // const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  // const todoListData = await res.json()

  return {
    props: {
      allPostsData,
      // todoListData
    },
  };
}

export default function Home({ allPostsData }) {
  const [todoListData, setToDoListData] = React.useState([
    { id: 1, title: 'React CRUD', completed: true },
    { id: 2, title: 'CRUD w/ API', completed: false },
    { id: 3, title: 'CRUD w/ Database', completed: false },
    { id: 4, title: 'CRUD w/ Auth', completed: false },
  ]);


  return (
    <Layout home>
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <About />
      <BlogList allPostsData={allPostsData} />
      <TodoList todoListData={todoListData} setToDoListData={setToDoListData} />
    </Layout >
  );
}