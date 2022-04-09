import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { ReactComponent as Close } from './assets/close.svg';
import { PublicCard as PublicItem } from '../../../../stores/publicStore';
import classes from './DetailCard.module.scss';

type DetailCardProps = {
    allCards: Array<PublicItem>;
    id: string;
    close: () => void;
}

const DetailCard: React.FC<DetailCardProps> = ({ close, allCards, id }) => {
    const cardInfo = allCards.filter(elem => elem.id === id)[0];
    return (
        <div className={classes.component}>
            <div className={classes.header}>
                <div className={classes.title}>
                    Технологии проектирования, технологии производства, технологии мышления
                </div>
                <div
                    onClick={close}
                    className={classes.close}
                >
                    <Close />
                </div>
            </div>
            <Scrollbars className={classes.contentWrapper}>
                <div className={classes.content}>
                    <div className={classes.info}>
                        <div className={classes.item}>
                            <strong>Направления</strong>: {cardInfo.specializations.map((elem, index, arr) =>
                                index === arr.length - 1 ? `${elem.name}.` : `${elem.name}, `)}
                        </div>
                        <div className={classes.item}>
                            <strong>Автор</strong>: {cardInfo.author.firstName}
                        </div>
                        <div className={classes.item}>
                            <strong>Дата</strong>: {cardInfo.editDate.toString()}
                        </div>
                        <div className={classes.item}>
                            <strong>Курсы</strong>: {cardInfo.courses.map((elem, index, arr) =>
                                index === arr.length - 1 ? `${elem.name}.` : `${elem.name}, `)}
                        </div>
                    </div>
                    <div className={classes.description}>
                        <strong>Описание: </strong>
                        <br /><br />
                        {cardInfo.content}
                    </div>
                    <div className={classes.item}>
                        <strong>Файлы: </strong>
                        <ul className={classes.list}>
                            {cardInfo.files.map((elem, index, arr) =>
                            (
                                <li>
                                    <a
                                        target='_blank'
                                        download={elem.name}
                                        href={elem.location}
                                        rel="noreferrer"
                                    >
                                        {elem.name}
                                    </a>
                                </li>
                            )
                            )}
                        </ul>
                    </div>
                </div>
            </Scrollbars>
        </div>
    );
};

export default DetailCard;