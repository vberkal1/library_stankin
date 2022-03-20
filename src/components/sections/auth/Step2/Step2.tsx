import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    TextField,
} from '@mui/material';

import { SelectedLoginSection, LoginSection } from '../../../pages/LoginPage/LoginPage';
import stankinLogo from '../assets/stankinLogo.png';
import classes from './Step2.module.scss';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Поле не заполнено').email('Введите корректный email'),

});

type Step2Props = {
    selectSection: (section: SelectedLoginSection) => void;
}

const Step2: React.FC<Step2Props> = ({ selectSection }) => {

    const {
        values,
        handleChange,
        submitForm,
        errors,
        touched,
    } = useFormik({
        initialValues: {
            email: '',
        },
        async onSubmit(formData) {
            console.log(formData);
        },
        validationSchema,
    });

    const selectRestoreSection = (): void => {
        selectSection(LoginSection.Login);
    }

    const selectEmailSection = (): void => {
        selectSection(LoginSection.Email);
    }

    const submit = (): void => {
        submitForm();
        selectEmailSection();
    }

    return (
        <div className={classes.component}>
            <img src={stankinLogo} alt="ЛОГОТИП СТАНКИН" />
            <form className={classes.form}>
                <div className={classes.info}>
                    <h1 className={classes.header}>Восстановление пароля</h1>
                    <div className={classes.line} />
                    <div className={classes.description}>
                        Введите адрес электронной почты и мы вышлем вам
                        <br />
                        ссылку для восстановления пароля.
                    </div>
                </div>
                <FormControl
                    sx={{ m: 1 }}
                >
                    <TextField
                        value={values.email}
                        onChange={handleChange}
                        className={classes.email}
                        fullWidth
                        label="E-mail"
                        name="email"
                        variant="outlined"
                        helperText={touched.email ? errors.email : undefined}
                    />
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        onClick={submit}
                    >
                        ДАЛЕЕ
                    </Button>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                    <Button
                        onClick={selectRestoreSection}
                        className={classes.cancel}
                        variant="outlined">
                        ОТМЕНА
                    </Button>
                </FormControl>
            </form>
        </div>
    );
};

export default Step2;