import { Button } from '@mui/material';
import React from 'react';
import { ReactComponent as AvatarIcon } from './assets/avatar.svg';
import classes from './AuthorsCard.module.scss';


type Author = {
    id: string,
    name: string,
    specialization: string,
    description: string,
}

type AuthorsCardProps = {
    card: Author;
    clickHandler: (id: string) => void
}

const AuthorsCard: React.FC<AuthorsCardProps> = ({ card, clickHandler }) => {
    return (
        <div className={classes.component}>
            <div className={classes.header}>
                <div className={classes.avatar}>
                    <AvatarIcon />
                </div>
                <div className={classes.name}>
                    {card.name}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.specialization}>
                    <strong>Направление: </strong>
                    {card.specialization}
                </div>
                <div className={classes.description}>
                    <strong>Описание: </strong><br /><br />
                    {card.description}
                </div>
                <Button
                    className={classes.button}
                    fullWidth
                    variant="contained"
                    onClick={() => clickHandler(card.id)}
                >
                    ПОСМОТРЕТЬ ПУБЛИКАЦИИ
                </Button>
            </div>
        </div>
    );
};

export default AuthorsCard;