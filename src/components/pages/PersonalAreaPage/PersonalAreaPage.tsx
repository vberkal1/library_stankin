import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Header from '../../layouts/Header';
import AuthorsSection from '../../sections/AuthorsSection';
import PublicationSection from '../../sections/PublicationSection';
import NotFoundPage from '../NotFoundPage';

import styles from './PersonalAreaPage.module.scss';

type PersonalAreaPageProps = {
    login: string;
    role: number;
}

const PersonalAreaPage: React.FC<PersonalAreaPageProps> = ({ login, role }) => {
    const { path } = useRouteMatch();
    return (
        <div className={styles.component}>
                <Header />
            <div className={styles.content}>
                <Switch>
                    <Route path={`${path}/publications`}>
                        <PublicationSection />
                    </Route>
                    <Route exact path={`${path}/news`}>
                        <div>news</div>
                    </Route>
                    <Route exact path={`${path}/authors`}>
                        <AuthorsSection/>
                    </Route>
                    <Route exact path={`${path}/me`}>
                        <div>me</div>
                    </Route>
                    <Route path="*">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default PersonalAreaPage;