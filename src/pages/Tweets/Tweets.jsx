import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, InfoParagraph } from "../../components/Global.styled";
import { UserList } from "../../components/UserList/UserList";
import { fetchUsers } from "../../redux/users/operations";
import {
  selectUsers,
  selectIsLoading,
  selectError,
} from "../../redux/users/selectors";

export const Tweets = () => {
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Heading>Tweets</Heading>
      {isLoading && !error && users.length < 1 && (
        <InfoParagraph>Please wait. We are loading users list.</InfoParagraph>
      )}
      {error && <InfoParagraph>{error}</InfoParagraph>}

      {users.length > 0 && !error && <UserList users={users} />}
    </>
  );
};
