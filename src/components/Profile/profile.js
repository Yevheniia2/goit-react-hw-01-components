// import profile from "./profile.css";
import PropTypes from 'prop-types';
import { Avatar, ProfileBox, ProfileName, Description, Tag, Location, Stats, ProfileItem, Label, Quantity } from './profile.styled';


// const data = profiles[0];

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return (
        <ProfileBox>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <ProfileName>{username}</ProfileName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <ProfileItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </ProfileItem>
                <ProfileItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </ProfileItem>
                <ProfileItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </ProfileItem>
            </Stats>
        </ProfileBox>
    );
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}




// export default Profile;