import PropTypes from 'prop-types';

export default function FriendList ({ friends }) {
    return (
        <ul className={"stat-list"}>
            {friends.map(({id, avatar, isOnline, name}) => (
                <li key={id} className={"item"}>
                    <span className={"status"}>{isOnline ? '🔵' : '🔴'}</span>
                    <img className={"avatar"} src={avatar} alt={"User avatar"} width={48} />
                    <p className={'name'}>{name}</p>
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
}