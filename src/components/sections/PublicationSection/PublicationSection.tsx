import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import PublicList from './PublicList';
import Filter from './Filter';
import { observer } from 'mobx-react-lite';
import publicStore from '../../../stores/publicStore/publicStore';
import DetailCard from './DetailCard'
import classes from './PublicationSection.module.scss';

const PublicationSection: React.FC = () => {
    const [isDetailed, setIsDetailed] = useState<boolean>(false);
    const [uuid, setUuid] = useState<string>('');
    const { allCards } = publicStore;

    useEffect(() => {
        publicStore.loadItems();
        publicStore.loadFilters();
    }, []);

    const clickHandler = (id: string): void => {
        setUuid(id);
        setIsDetailed(!isDetailed);
    };

    const close = (): void => {
        setIsDetailed(false);
    }

    // const history = useHistory();
    // const { path } = useRouteMatch();

    // const navigateToDetailedItem = (id: string): void => {
    //     history.push(`${path}/${id}`);
    // };


    return (
        <div className={classes.component}>
            <div className={classes.row}>
                <div className={classes.col}>
                    <div className={classes.titleSection}>
                        <h2 className={classes.header}>Публикации</h2>
                        <div className={classes.line}></div>
                        <TextField
                            fullWidth
                            className={classes.search}
                            placeholder='Поиск по публикациям'
                        />
                    </div>
                    {
                        isDetailed
                            ? <DetailCard close={close} allCards={allCards} id={uuid}/>
                            : <PublicList clickHandler={clickHandler} allCards={allCards} />
                    }
                </div>
                <Filter />
            </div>
        </div>
    );
};

export default observer(PublicationSection);