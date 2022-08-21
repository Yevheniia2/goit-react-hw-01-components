import PropTypes from 'prop-types';
import { Container } from './friendList.styled';
import { FriendListItem } from '../FriendListItem/friendListItem';


export default function FriendList ({ friends }) {
    return (
        <Container>
            {friends.map(({id, avatar, isOnline, name}) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}
        </Container>
    );
}

FriendList.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}