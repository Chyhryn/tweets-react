import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { UserCard } from "../UserCard/UserCard";
import { List, BackLink, LoadBtn, Select, Container } from "./UserList.styled";

export const UserList = ({ users }) => {
  const [followedList, setFollowedList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const usersPerPage = 12;
  const indexOfLastUser = currentPage * usersPerPage;
  const displayedUsers = filteredUsers.slice(0, indexOfLastUser);

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

  const onChangeSelectHandler = (e) => {
    switch (e.target.value) {
      case "show-all":
        setFilteredUsers(users);
        break;
      case "following":
        setFilteredUsers(
          users.filter((user) => followedList.includes(user.id))
        );
        break;
      case "follow":
        setFilteredUsers(
          users.filter((user) => !followedList.includes(user.id))
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const savedData = localStorage.getItem("followedList");
    if (savedData) {
      setFollowedList(JSON.parse(savedData));
    }
  }, []);

  return (
    <>
      <Container>
        <BackLink to={location.state?.from ?? "/"}>{"<-- Back"}</BackLink>
        <Select name="users-list-filter" onChange={onChangeSelectHandler}>
          <option value="show-all">show-all</option>
          <option value="following">following</option>
          <option value="follow">follow</option>
        </Select>
      </Container>
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
      {displayedUsers.length !== filteredUsers.length && (
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
