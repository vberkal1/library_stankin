import { Button } from '@mui/material';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import publicStore from '../../../../stores/publicStore/publicStore';
import AutoComplite from '../../../common/AutoComplite';
import system from './assets/system.png';
import styles from './Filter.module.scss';

const Filter = () => {

    const atatchFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const files = e.target.files;
        // console.log(5);
        // const reader = new FileReader();
        // if (files) {reader.readAsDataURL(files[0]);}
        // reader.onload = (e) => {
        // console.log(e.target?.result);
        // return axios.post('http://stankinlibrary.ru/test.php', {file: e.target?.result});
        // bodyFormData.append("file", e.target?.result);
        const bodyFormData = new FormData();
        if (e.target.files) {
            bodyFormData.append("file", e.target.files[0]);
            return axios({
                method: 'post',
                url: 'http://stankinlibrary.ru/test.php',
                withCredentials: false,
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" },
            })
        }
    }

    return (
        <div className={styles.component}>
            <div className={styles.filterTitle}>
                <img src={system} alt="system" />
                <h2 className={styles.title}>Фильтр</h2>
            </div>
            <AutoComplite options={publicStore.authors} name={'Преподаватель'} />
            <AutoComplite options={publicStore.specialities} name={'Направление'} />
            <AutoComplite options={publicStore.courses} name={'Группа'} />
            <Button
                variant="contained"
                component="label"
            >
                Upload File
                <input
                    onChange={atatchFile}
                    type="file"
                    hidden
                />
            </Button>
            <br /> <br />
            <Button
                variant="contained"
                component="label"
            >
                добавить ячейку
            </Button>
        </div>
    );
};

export default observer(Filter);