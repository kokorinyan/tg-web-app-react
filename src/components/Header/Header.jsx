import React from 'react';
import Button from "../Button/Button";
import {UseTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = UseTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user.username}
            </span>
            
        </div>
    );
};

export default Header;