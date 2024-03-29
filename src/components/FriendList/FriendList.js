import PropTypes from 'prop-types';
import { Friends } from './FriendList.styled.jsx';
import { FriendListItem } from '../FriendListItem/FriendListItem.js';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(
        (
          { avatar, name, isOnline, id } //property destructuring
        ) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        )
      )}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
