import { Container } from '@mui/material';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import stankinLogo from './assets/logo.jpg'
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { path } = useRouteMatch();

    const [links, setLinks] = useState({
        news: false,
        publications: true,
        authors: false,
    });



    return (
        <div className={styles.component}>
            <div className={styles.content}>
                <img className={styles.logo} src={stankinLogo} alt="logo" />
                <div className={styles.navigation}>
                    <Link
                        className={clsx(links.news ? styles.activeLink : styles.link)}
                        onClick={() => setLinks({ news: true, publications: false, authors: false })}
                        to={`${path}/news`}
                    >НОВОСТИ
                    </Link>
                    <Link
                        className={clsx(links.publications ? styles.activeLink : styles.link)}
                        to={`${path}/publications`}
                        onClick={() => setLinks({ news: false, publications: true, authors: false })}
                    >
                        ПУБЛИКАЦИИ
                    </Link>
                    <Link
                        onClick={() => setLinks({ news: false, publications: false, authors: true })}
                        className={clsx(links.authors ? styles.activeLink : styles.link)}
                        to={`${path}/authors`}
                    >
                        АВТОРЫ
                    </Link>
                </div>
                <div className={styles.autor}>
                    <Link to={`${path}/me`}>Автор</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;