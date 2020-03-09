import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.banner}>
                <img width="100%" src="https://botek-fitness.ru/upload/iblock/e7e/e7eed63939eb2ca28db19ed3d4fcfbd9.jpg" alt="" />
            </div>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src="https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg" alt="" />
                </div>
                <div className={s.descr}>
                    <strong>John Doe</strong>
                    <br />
                    <br />
                    Date of Birth 02.02.2020 <br />
                    City: LA <br />
                    Education: College <br />
                    Web site: url.com
                 </div>
            </div>
        </div>
    );
}

export default ProfileInfo;