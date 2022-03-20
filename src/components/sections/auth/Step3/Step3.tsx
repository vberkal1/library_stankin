import React, { useState } from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import stankinLogo from '../assets/stankinLogo.png'
import { ReactComponent as VisibleIcon } from '../assets/eye.svg';
import classes from './Step3.module.scss';

const validationSchema = Yup.object().shape({
    password: Yup.string().required('Поле не заполнено'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Пароли не совпадают'),
});

const Step3: React.FC = () => {

    const {
        values,
        handleChange,
        submitForm,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        async onSubmit(formData) {
            console.log(formData);
        },
        validationSchema,
    });

    const changeFormValues = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
        handleChange(e);
    };
    const [isVisibleIcons, setIsVisibleIcons] = useState({
        password: true,
        confirmPassword: true,
    });
    const handleClickShowPassword = (): void => {
        setIsVisibleIcons({ ...isVisibleIcons, password: !isVisibleIcons.password });
    };
    const handleClickShowConfirm = (): void => {
        setIsVisibleIcons({ ...isVisibleIcons, confirmPassword: !isVisibleIcons.confirmPassword });
    };


    return (
        <div className={classes.component}>
            <img src={stankinLogo} alt="ЛОГОТИП СТАНКИН" />
            <form className={classes.form}>
                <div className={classes.info}>
                    <h1 className={classes.header}>Восстановление пароля</h1>
                    <div className={classes.line} />
                    <div className={classes.description}>
                        Создайте новый надежный пароль, который вы не
                        <br />
                        использовали ранее.
                    </div>
                </div>
                <FormControl sx={{ m: 1 }}>
                    <InputLabel htmlFor="password">Пароль</InputLabel>
                    <OutlinedInput
                        value={values.password}
                        className={classes.password}
                        onChange={changeFormValues}
                        fullWidth
                        id="password"
                        name="password"
                        type={isVisibleIcons.password ? 'text' : 'password'}
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
                    <InputLabel htmlFor="confirmPassword">Повторите пароль</InputLabel>
                    <OutlinedInput
                        value={values.confirmPassword}
                        className={classes.password}
                        onChange={changeFormValues}
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        type={isVisibleIcons.confirmPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirm}
                                >
                                    <VisibleIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Повторите пароль"
                    />
                    <FormHelperText>{touched.confirmPassword ? errors.confirmPassword : undefined}</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        onClick={submitForm}
                    >
                        ВОЙТИ С НОВЫМ ПАРОЛЕМ
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default Step3;