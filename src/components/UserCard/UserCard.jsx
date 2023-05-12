import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  // CardImg,
  // CardImgThumb,
  AvatarThumb,
  Avatar,
  // Line,
  List,
  Item,
} from "./UserCard.styled";
import { UserCardBtn } from "./UserCardBtn/UserCardBtn";
import { updateFollowers } from "../../redux/users/operations";

export const UserCard = ({ user, isFollowed, updateFollowedList }) => {
  const [followers, setFollowers] = useState(user.followers);
  const dispatch = useDispatch();

  const onCLickHandle = () => {
    const updatedFollowers = isFollowed ? followers - 1 : followers + 1;
    setFollowers(updatedFollowers);
    updateFollowedList(user.id);
    dispatch(updateFollowers({ id: user.id, followers: updatedFollowers }));
  };

  return (
    <Card>
      <AvatarThumb>
        <Avatar alt="avatar" src={user.avatar} />
      </AvatarThumb>

      <List>
        <Item key="tweets">{user.tweets} tweets</Item>
        <Item key="followers">
          {followers.toLocaleString("en-US")} followers
        </Item>
      </List>
      <UserCardBtn onCLickHandle={onCLickHandle} isFollowed={isFollowed}>
        {isFollowed ? "Following" : "Follow"}
      </UserCardBtn>
    </Card>
  );
};

UserCard.protoTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  isFollowed: PropTypes.bool.isRequired,
  updateFollowedList: PropTypes.func.isRequired,
};
