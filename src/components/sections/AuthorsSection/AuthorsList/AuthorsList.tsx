import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './AuthorsList.module.scss';
import renderArray from '../../../../utils/renderArray';
import { Scrollbars } from 'react-custom-scrollbars';
import { PublicCard as PublicItem } from '../../../../stores/publicStore';
import AuthorsCard from '../AuthorsCard';

type AuthorsListProps = {
    clickHandler: (id: string) => void;
}

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
        id: '7',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '8',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '9',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
    {
        id: '10',
        name: 'Денисов Григорий Иванович',
        specialization: 'Информационные системы и технологии',
        description: `Руководство дипломным проектированием по тематикам
         «Операционные системы семейства Unix», «Системы управления промышленными роботами».`,
    },
]

const AuthorsList: React.FC<AuthorsListProps> = ({ clickHandler }) => {
    const renderPublicCard = (
        authorItem: Author,
        index: number,
        arr: Array<any>,
    ): React.ReactNode => {
        const isLastItem: boolean = index === arr.length - 1;
        return (
            <li
                // ref={isLastItem ? observableElementRef : undefined}
                key={authorItem.id}
            >
                <AuthorsCard
                    card={authorItem}
                    clickHandler={() => clickHandler(authorItem.id)}
                />
            </li>
        );
    };

    // return loading ? <p>Загрузка...</p> : (
    return false ? <p>Загрузка...</p> : (
        <Scrollbars className={styles.component}>
            <ul className={styles.content}>
                {renderArray<Author>(
                    allCards,
                    renderPublicCard,
                    'По выбранным фильтрам ничего не найдено.',
                )}
            </ul>
        </Scrollbars>
    );
};

export default observer(AuthorsList);