import React, {useEffect, useState} from 'react';
import './Form.css'
import {UseTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');
    const [tg] = UseTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type='text' placeholder={'Country'} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type='text' placeholder={'Street'} value={street}/>
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'physical'}>Физ лицоо</option>
                <option value={'legal'}>Юр лицо</option>
            </select>
        </div>
    );
};

export default Form;