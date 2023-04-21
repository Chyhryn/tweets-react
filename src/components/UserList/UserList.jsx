import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard";
import { List, BackLink, LoadBtn } from "./UserList.styled";

export const UserList = ({ users }) => {
  const [followedList, setFollowedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 12;
  const indexOfLastUser = currentPage * usersPerPage;
  const displayedUsers = users.slice(0, indexOfLastUser);

  const location = useLocation();

  const isFollowed = (id) =>
    followedList.find((el) => el === id) ? true : false;

  const updateFollowedList = (id) => {
    const updatedData = isFollowed(id)
      ? followedList.filter((el) => el !== id)
      : [...followedList, id];
    setFollowedList(updatedData);
    localStorage.setItem("followedList", JSON.stringify(updatedData));
  };

  const onClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const savedData = localStorage.getItem("followedList");
    if (savedData) {
      setFollowedList(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <BackLink to={location.state?.from ?? "/"}>{"<-- Back"}</BackLink>
      <List>
        {displayedUsers.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={user}
              isFollowed={isFollowed(user.id)}
              updateFollowedList={updateFollowedList}
            />
          );
        })}
      </List>
      {displayedUsers.length !== users.length && (
        <LoadBtn type="button" onClick={onClickHandler}>
          Load More
        </LoadBtn>
      )}
    </>
  );
};

UserList.protoTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
