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
} from './profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
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
          <UserStatsQuantity>{stats.followers}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Views</UserStatsLabel>
          <UserStatsQuantity>{stats.views}</UserStatsQuantity>
        </li>
        <li>
          <UserStatsLabel>Likes</UserStatsLabel>
          <UserStatsQuantity>{stats.likes}</UserStatsQuantity>
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
  stats: PropTypes.object.isRequired,
};
