import PropTypes from "prop-types";
import { FollowBtn, FollowingBtn } from "./UserCardBtn.styled";

export const UserCardBtn = ({ onCLickHandle, isFollowed, children }) => {
  const Btn = isFollowed ? FollowingBtn : FollowBtn;

  return (
    <Btn type="button" onClick={onCLickHandle}>
      {children}
    </Btn>
  );
};

UserCardBtn.protoTypes = {
  onCLickHandle: PropTypes.func.isRequired,
  isFollowed: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};
