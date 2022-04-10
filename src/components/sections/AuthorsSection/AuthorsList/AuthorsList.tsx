import React from 'react';
import classes from './AuthorsList.module.scss';
import renderArray from '../../../../utils/renderArray';
import { Scrollbars } from 'react-custom-scrollbars';

type Author = {
    id: string,
    name: string,
    specialization: string,
    description: string,
}

const allCards: Array<Author> = [
    {
        id: '1',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '2',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '3',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '4',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '5',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '6',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '6',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '6',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '6',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '6',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
]

const AuthorsList: React.FC = () => {

    const renderAuthorCard = (
        publicItem: Author,
        index: number,
        arr: Array<any>,
    ): React.ReactNode => {
        const isLastItem: boolean = index === arr.length - 1;
        return (
            <li
                // ref={isLastItem ? observableElementRef : undefined}
                key={publicItem.id}
            >
                {/* <PublicCard
                    data={publicItem}
                    onClick={() => clickHandler(publicItem.id)}
                /> */}
                <div style={{height: 80, width: 100, backgroundColor: 'red'}}>sasasa</div>
            </li>
        );
    };

    // return loading ? <p>Загрузка...</p> : (
    return false ? <p>Загрузка...</p> : (
        <Scrollbars className={classes.component}>
            <ul className={classes.content}>
                {renderArray<Author>(
                    allCards,
                    renderAuthorCard,
                    'По выбранным фильтрам ничего не найдено.',
                )}
            </ul>
        </Scrollbars>
    );
};

export default AuthorsList;