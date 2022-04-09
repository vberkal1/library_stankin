import { Button } from '@mui/material';
import React from 'react';
import { PublicCard as PublicItem } from '../../../../stores/publicStore';
import styles from './PublicCard.module.scss';

type PublicCardProps = {
    onClick: () => void;
    data: PublicItem;
}

const PublicCard: React.FC<PublicCardProps> = ({ data, onClick }) => {
    return (
        <div className={styles.component}>
            <h3 className={styles.title}>{data.title}</h3>
            <div className={styles.body}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        Направления: {
                            data.specializations.map(elem => `${elem.name} `)
                        }
                    </div>
                    <div className={styles.item}>
                        Автор: {data.author.firstName}
                    </div>
                    <div className={styles.item}>
                        Дата: {data.editDate.toString()}
                    </div>
                </div>
                <Button
                    className={styles.button}
                    onClick={onClick}
                >
                    ПОДРОБНЕЕ
                </Button>
            </div>
        </div>
    );
};

export default PublicCard;