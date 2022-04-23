import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import publicStore from '../../../stores/publicStore/publicStore';
import classes from './AuthorsSection.module.scss';
import AuthorsList from './AuthorsList';
import DetailCard from './DetailCard';

const AuthorsSection: React.FC = () => {
    const [isDetailed, setIsDetailed] = useState<boolean>(false);
    const [uuid, setUuid] = useState<string>('');

    useEffect(() => {
        publicStore.loadItems();
    }, []);

    const clickHandler = (id: string): void => {
        publicStore.loadItems('', '', id);
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
                        <h2 className={classes.header}>Авторы</h2>
                        <div className={classes.line}></div>
                        <TextField
                            fullWidth
                            className={classes.search}
                            placeholder='Поиск по авторам'
                        />
                    </div>
                    {
                        isDetailed
                            ? <DetailCard close={close}/>
                            : <AuthorsList clickHandler={clickHandler} />
                    }
                </div>
            </div>
        </div>
    );
};

export default AuthorsSection;