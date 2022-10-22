import PropTypes from 'prop-types';
import {
  Friend,
  FriendStatus,
  FriendListContainer,
} from './FriendList.styled';


export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(friend => (
        <Friend key={friend.id}>
          <FriendStatus online={friend.isOnline}></FriendStatus>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </Friend>
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
