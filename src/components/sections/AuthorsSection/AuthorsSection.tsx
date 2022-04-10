import { TextField } from '@mui/material';
import React from 'react';
import AuthorsList from './AuthorsList';
import classes from './AuthorsSection.module.scss';

const AuthorsSection: React.FC = () => {
    return (
        <div>
            <div className={classes.component}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <div className={classes.titleSection}>
                            <h2 className={classes.header}>Авторы</h2>
                            <div className={classes.line}></div>
                            <TextField
                                fullWidth
                                className={classes.search}
                                placeholder='Поиск по публикациям'
                            />
                        </div>
                        <AuthorsList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorsSection;