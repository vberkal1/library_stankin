import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import styles from './PublicationSection.module.scss';
import PublicList from './PublicList';
import Filter from './Filter';
import { observer } from 'mobx-react-lite';
import publicStore from '../../../stores/publicStore/publicStore';

const PublicationSection: React.FC = () => {
    const { allCards } = publicStore;

    useEffect(() => {
        publicStore.loadItems();
    }, []);


    return (
        <div className={styles.component}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.titleSection}>
                        <h2 className={styles.header}>Публикации</h2>
                        <div className={styles.line}></div>
                        <TextField
                            fullWidth
                            className={styles.search}
                            placeholder='Поиск по публикациям'
                        />
                    </div>
                    <PublicList allCards={allCards}/>
                </div>
                <Filter />
            </div>
        </div>
    );
};

export default observer(PublicationSection);