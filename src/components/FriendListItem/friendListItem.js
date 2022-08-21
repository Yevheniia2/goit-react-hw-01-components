import PropTypes from 'prop-types';
import { FriendItem, Name } from './friendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <FriendItem>
            <span>{isOnline ? '🔵' : '🔴'}</span>
            <img src={avatar} alt={"User avatar"} width={48} />
            <Name>{name}</Name>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};