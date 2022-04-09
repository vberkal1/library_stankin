import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './PublicList.module.scss';
import PublicCard from '../PublicCard';
import renderArray from '../../../../utils/renderArray';
import { Scrollbars } from 'react-custom-scrollbars';
import { PublicCard as PublicItem } from '../../../../stores/publicStore';
import useInfinityScroll from '../../../../hooks/useInfinityScroll';
import publicStore from '../../../../stores/publicStore/publicStore';

type PublicListProps = {
    allCards: Array<PublicItem>;
    clickHandler: (id: string) => void;
}

const PublicList: React.FC<PublicListProps> = ({ allCards, clickHandler }) => {
    const { loadUpItems } = publicStore


    const infinityScrollOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
    };

    const [observableElementRef] = useInfinityScroll(
        loadUpItems,
        infinityScrollOptions,
        [allCards],
    );

    const renderPublicCard = (
        publicItem: PublicItem,
        index: number,
        arr: Array<any>,
    ): React.ReactNode => {
        const isLastItem: boolean = index === arr.length - 1;

       

        return (
            <li
                ref={isLastItem ? observableElementRef : undefined}
                key={publicItem.id}
            >
                <PublicCard
                    data={publicItem}
                    onClick={() => clickHandler(publicItem.id)}
                />
            </li>
        );
    };

    // return loading ? <p>Загрузка...</p> : (
    return false ? <p>Загрузка...</p> : (
        <Scrollbars className={styles.component}>
            <ul className={styles.content}>
                {renderArray<PublicItem>(
                    allCards,
                    renderPublicCard,
                    'По выбранным фильтрам ничего не найдено.',
                )}
            </ul>
        </Scrollbars>
    );
};

export default observer(PublicList);
