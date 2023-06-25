import PropTypes from 'prop-types';
import {
  UserProfile,
  Userinfo,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsLabel,
  UserStatsQuantity,
} from './Profile.styled.jsx';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  const { followers, views, likes } = stats; //property destructuring

  return (
    <UserProfile>
      <Userinfo>
        <UserAvatar src={avatar} alt="user avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Userinfo>

      <UserStats>
        <li>
          <UserStatsLabel>Followers</UserStatsLabel>
          <UserStatsQuantity>{followers}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{views}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{likes}</UserStatsQuantity>
        </li>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
