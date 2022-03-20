import React from 'react';
import {
    Button,
    FormControl,
} from '@mui/material';

import { SelectedLoginSection, LoginSection } from '../../../pages/LoginPage/LoginPage';
import stankinLogo from '../assets/stankinLogo.png'
import classes from './Step4.module.scss';

type Step4Props = {
    selectSection: (section: SelectedLoginSection) => void;
}

const Step4: React.FC<Step4Props> = ({ selectSection }) => {

    const selectRestoreSection = (): void => {
        selectSection(LoginSection.Restore)
    }

    return (
        <div className={classes.component}>
            <img src={stankinLogo} alt="ЛОГОТИП СТАНКИН" />
            <form className={classes.form}>
                <div className={classes.info}>
                    <h1 className={classes.header}>Восстановление пароля</h1>
                    <div className={classes.line} />
                    <div className={classes.description}>
                        На почту отправлена ссылка для восстановления
                        <br />
                        пароля.
                    </div>
                </div>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        onClick={selectRestoreSection}
                        variant="text">ОТМЕНА
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default Step4;