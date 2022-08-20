import PropTypes from 'prop-types';
import { Container, FriendItem, Name } from './friendList.styled';

export default function FriendList ({ friends }) {
    return (
        <Container className={"stat-list"}>
            {friends.map(({id, avatar, isOnline, name}) => (
                <FriendItem key={id} className={"item"}>
                    <span className={"status"}>{isOnline ? '🔵' : '🔴'}</span>
                    <img className={"avatar"} src={avatar} alt={"User avatar"} width={48} />
                    <Name className={'name'}>{name}</Name>
                </FriendItem>
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