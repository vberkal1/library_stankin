import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory, useRouteMatch } from 'react-router-dom';

import styles from './PublicList.module.scss';
import PublicCard from '../PublicCard';
import renderArray from '../../../../utils/renderArray';
import { Scrollbars } from 'react-custom-scrollbars';
import { PublicCard as PublicItem } from '../../../../stores/publicStore';
import useInfinityScroll from '../../../../hooks/useInfinityScroll';
import publicStore from '../../../../stores/publicStore/publicStore';

// import { useInfinityScroll } from '../../../../../hooks';
// import publicCard from '../publicCard';


type PublicListProps = {
    allCards: Array<PublicItem>;
    // observableElementRef: React.MutableRefObject<HTMLLIElement | null>;
}

const PublicList: React.FC<PublicListProps> = ({ allCards }) => {
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



    const history = useHistory();
    const { path } = useRouteMatch();

    const navigateToDetailedItem = (id: string): void => {
        history.push(`${path}/${id}`);
    };

    const renderPublicCard = (
        publicItem: PublicItem,
        index: number,
        arr: Array<any>,
    ): React.ReactNode => {
        const isLastItem: boolean = index === arr.length - 1;

        const clickHandler = (): void => {
            navigateToDetailedItem(publicItem.id);
        };

        return (
            <li
                ref={isLastItem ? observableElementRef : undefined}
                key={publicItem.id}
            >
                <PublicCard
                    data={publicItem}
                    onClick={clickHandler}
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
