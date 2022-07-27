import utilStyles from '../styles/utils.module.css';

export default function Goals() {
    const goalItems = [
        {
            name: "React CRUD",
            completed: true
        },
        {
            name: "CRUD w/ API",
            completed: false
        },
        {
            name: "CRUD w/ Database",
            completed: false
        },
        {
            name: "CRUD w/ Auth",
            completed: false
        }
    ];
    // console.log(goalItems);
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Goals</h2>
            <ul className={utilStyles.list}>
                {goalItems.map((item) => {
                    if (item.completed) {
                        return (<li className={utilStyles.todoDone}>{item.name}</li>);
                    }
                    else {
                        return (<li>{item.name}</li>);
                    }

                })}
            </ul>
        </section>
    );
}