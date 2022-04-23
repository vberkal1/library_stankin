import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Scrollbars from 'react-custom-scrollbars';
import publicStore from '../../../../stores/publicStore/publicStore';
import { ReactComponent as Close } from './assets/close.svg';
import classes from './DetailCard.module.scss';

type DetailCardProps = {
    close: () => void
}

const DetailCard: React.FC<DetailCardProps> = ({ close }) => {

    const history = useHistory();

    const navigateToDetailedItem = (id: string): void => {
        history.push(`/personal-area/publications/${id}`);
    };

    return (

        <div className={classes.component}>
            <Scrollbars>
                <div className={classes.close} onClick={close}>
                    <Close />
                </div>
                <div className={classes.header}>
                    <div className={classes.avatar}></div>
                    <div className={classes.info}>
                        <h2>Григорьев Николай Алексеевич</h2>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero placeat architecto optio aliquam amet, doloribus nisi quo, at accusamus voluptatem, unde magnam ipsum. Ad quas neque qui quae velit pariatur mollitia? Ratione at mollitia itaque voluptates ut consectetur saepe eligendi!
                    </div>
                </div>
                <div className={classes.list}>
                    <div className={classes.publications}>Публикации:</div>
                    {
                        publicStore.allCards.length ?
                            publicStore.allCards.map(elem =>
                                <div
                                    className={classes.elem}
                                    onClick={() => navigateToDetailedItem(elem.id)}
                                >
                                    {elem.title}
                                </div>
                            ) : <div>Загрузка...</div>
                    }
                </div>
            </Scrollbars>
        </div>
    );
};

export default observer(DetailCard);