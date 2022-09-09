import React from 'react';
import { useSelector } from 'react-redux';
import "./HeaderOption.css";
import { Avatar } from '@mui/material';
import { selectUser } from '../../features/userSlice';

function HeaderOption({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar 
                    className="headerOption__icon"
                >
                    {user?.email[0]}
                </Avatar>
            )}
            <div className="headerOption__title">{title}</div>
        </div>
    )
}

export default HeaderOption;