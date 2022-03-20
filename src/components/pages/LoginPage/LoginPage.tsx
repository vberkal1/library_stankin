import React, { useState } from 'react';
import Step1 from '../../sections/auth/Step1';
import Step2 from '../../sections/auth/Step2';
import Step3 from '../../sections/auth/Step3';
import Step4 from '../../sections/auth/Step4';
import classes from './LoginPage.module.scss';

export enum LoginSection {
    Login = "Login",
    Email = "Email",
    Restore = "Restore",
    Create = "Create",
}

export type SelectedLoginSection =
    LoginSection.Create
    | LoginSection.Login
    | LoginSection.Restore
    | LoginSection.Email;

const LoginPage: React.FC = () => {

    const [selectedLoginSection, setSelectedLoginSection] =
        useState<SelectedLoginSection>(LoginSection.Login);

    const selectSection = (section: SelectedLoginSection): void => {
        setSelectedLoginSection(section)
    };

    switch (selectedLoginSection) {
        case LoginSection.Restore:
            return (
                <div className={classes.component}>
                    <Step2 selectSection={selectSection} />
                    {/* <Step3 /> */}
                </div>
            );
        case LoginSection.Email:
            return (
                <div className={classes.component}>
                    <Step4 selectSection={selectSection}/>
                </div>
            );
        default:
            return (
                <div className={classes.component}>
                    <Step1
                        selectSection={selectSection}
                    />
                </div>
            );
    }
};

export default LoginPage;