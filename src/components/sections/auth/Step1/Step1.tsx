import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { observer } from 'mobx-react-lite';

import stankinLogo from '../assets/stankinLogo.png'
import { SelectedLoginSection, LoginSection } from '../../../pages/LoginPage/LoginPage';
import { ReactComponent as VisibleIcon } from '../assets/eye.svg';
import { FormDataAuth } from '../../../../stores/authStore';
import classes from './Step1.module.scss';

const validationSchema = Yup.object().shape({
    login: Yup.string().required('Поле не заполнено'),
    password: Yup.string().required('Поле не заполнено'),
});

type Step1Props = {
    selectSection: (section: SelectedLoginSection) => void;
    submit: (formData: FormDataAuth) => Promise<void>;
}

const Step1: React.FC<Step1Props> = ({ selectSection, submit }) => {

    const {
        values,
        handleChange,
        submitForm,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        async onSubmit(formData) {
            submit(formData);
        },
        validationSchema,
    });

    const [isVisibleIcon, setIsVisibleIcon] = useState<boolean>(false);

    const changeFormValues = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        handleChange(e);
    };

    const handleClickShowPassword = (): void => {
        setIsVisibleIcon(!isVisibleIcon);
    };

    const selectRestoreSection = (): void => {
        selectSection(LoginSection.Restore);
    }

    return (
        <div className={classes.component}>
            <img src={stankinLogo} alt="ЛОГОТИП СТАНКИН" />
            <form className={classes.form}>
                <FormControl
                    sx={{ m: 1 }}
                >
                    <TextField
                        value={values.login}
                        className={classes.login}
                        onChange={changeFormValues}
                        helperText={touched.login ? errors.login : undefined}
                        fullWidth
                        label="Логин"
                        name="login"
                        variant="outlined"
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <OutlinedInput
                        value={values.password}
                        className={classes.password}
                        onChange={changeFormValues}
                        fullWidth
                        id="password"
                        name="password"
                        type={isVisibleIcon ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    <VisibleIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Пароль"
                    />
                    <FormHelperText>{touched.password ? errors.password : undefined}</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        onClick={submitForm}
                    >
                        ВОЙТИ
                    </Button>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        onClick={selectRestoreSection}
                        variant="text">ЗАБЫЛИ ПАРОЛЬ?
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default observer(Step1);